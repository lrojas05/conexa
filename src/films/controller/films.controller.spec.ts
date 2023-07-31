import { Test, TestingModule } from '@nestjs/testing';

import { FilmsController } from './films.controller';
import { FilmsService } from '../service/films.service';
import { getModelToken } from '@nestjs/mongoose';
import { CreateFilmDto } from '../dto/createFilm.dto';
import { Film } from '../schema/film.schema';
import { create } from 'domain';
import { UpdateFilmDto } from '../dto/updateFilm.dto';


const createFilmDto :  CreateFilmDto = {
  title: 'string',
  episode_id: 6,
  opening_crawl: 'string',
  director: 'string',
  producer: 'string',
  release_date: new Date(),
  characters: ['str'],
  planets: ['hshj'],
  starships: ['jajsdj'],
  vehicles: ['jasjdj'],
  species: ['jkajdj'],
  url: '',
  created: new Date(),
  edited: new Date(),
};

const updateFilmDto :  UpdateFilmDto = {
  title: 'string',
  episode_id: 6,
  opening_crawl: 'string',
  director: 'string',
  producer: 'string',
  release_date: new Date(),
  characters: ['str'],
  planets: ['hshj'],
  starships: ['jajsdj'],
  vehicles: ['jasjdj'],
  species: ['jkajdj'],
  url: '',
  created: new Date(),
  edited: new Date(),
};

describe('FilmsController', () => {
  let controller: FilmsController;
 
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmsController],
      providers: [
        {
           provide: FilmsService,
           useValue: {
            createFilm: jest.fn(),
            updateFilm: jest.fn(),
            removeFilm: jest.fn(),
           },
        },
        {
          provide: getModelToken('User'),
          useValue: jest.fn()
        },
       ],
    }).compile();

    
    controller = module.get<FilmsController>(FilmsController);
   });

  it('FilmsController Defined', () => {
    expect(controller).toBeDefined();
  });

  it('Films create', async() => {
    
    const ok = 'OK'
    jest.spyOn(controller, 'createFilm').mockResolvedValue(ok);
    const userCreated = await controller.createFilm(createFilmDto);
    expect(userCreated).toEqual(ok);
  });

  it('Films Update', async() => {
    const id = '3'; 

    const ok = 'updated'
    jest.spyOn(controller, 'updateFilm').mockResolvedValue(ok);
    const userCreated = await controller.updateFilm(id,updateFilmDto);
    expect(userCreated).toEqual(ok);

  });

  it('Films remove', async() => {
    const id = '3'; 
    const ok = 'updated'
    jest.spyOn(controller, 'removeFilm').mockResolvedValue(ok);

    const userCreated = await controller.removeFilm(id);
    expect(userCreated).toBe(ok);
  });

});
