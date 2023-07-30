import { Test, TestingModule } from '@nestjs/testing';
import { FilmsController } from './films.controller';
import { FilmsService } from '../service/films.service';
import { HttpService } from '@nestjs/axios';


describe('FilmsController', () => {
  const response = {  
    'title': 'string',
    'episode_id': 6,
    'opening_crawl': 'string',
    'director': 'string',
    'producer': 'string',
    'release_date': Date,
   'characters': [],
    'planets': [],
   'starships': [],
   'vehicles': [],
   'species' : [],
   'url' : ''
  };

  let controller: FilmsController;
 
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmsController],
      providers: [
        {
           provide: FilmsService,
           useValue: {},
        },
       ],
    }).compile();

    
    controller = module.get<FilmsController>(FilmsController);
   });

  it('FilmsController Defined', () => {
    expect(controller).toBeDefined();
  });

});
