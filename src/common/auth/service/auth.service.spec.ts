import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';


describe('AuthService', () => {
  let service: AuthService;
  let jwtService: JwtService;
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, 
        {
          provide: getModelToken('User'),
          useValue:Model,
        },
        JwtService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
