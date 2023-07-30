import { Test, TestingModule } from '@nestjs/testing';
import { FilmsService } from './films.service';
import { HttpService } from '@nestjs/axios';
import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';

describe('FilmsService', () => {
  let service: FilmsService;

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
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<FilmsService>(FilmsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
