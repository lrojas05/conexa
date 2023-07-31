import { Test, TestingModule } from '@nestjs/testing';
import { FilmsService } from './films.service';

import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Film } from '../schema/film.schema';
import { CreateFilmDto } from '../dto/createFilm.dto';
import {  of, scheduled } from 'rxjs';




describe('FilmsService', () => {

  let service: FilmsService;
  let httpService: HttpService
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FilmsService,
        {
          provide: getModelToken('Film'),
          useValue: Model,
        },
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(),
            post: jest.fn(),
            patch: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<FilmsService>(FilmsService);
    httpService = module.get<HttpService>(HttpService);

  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


/*   it('findAllFilms', () => {

    const data = '';

    const response: AxiosResponse<any> = {
      data,
      headers: {},
      config: {
        url: 'https://swapi.dev/api/films/',
        headers: undefined
      },
      status: 200,
      statusText: 'OK',
    };

    jest
    .spyOn(httpService, 'get')
    .mockReturnValue(
      of({
        data:{ },
        headers: {},
        config: { url: 'https://swapi.dev/api/films/' },
        status: 200,
        statusText: 'OK',
       }) as any,
       
    );

    service.findAllFilms().then((response) => {
      expect(data).toEqual(response.data);
    })

    }); */
    
  });
/*   it('must return an Array of type UserSerializer', async () => {
    jest.spyOn(usersService, 'findAll').mockImplementation(() =>
      Promise.resolve([{ name: 'example' }] as unknown as Promise<User[]>));

    const result = await controller.getUsers();

    expect(result).toHaveLength(1)
    expect(result[0] instanceof UserSerializer).toEqual(true)
    expect(usersService.findAll).toHaveBeenCalledTimes(1);
  }) */