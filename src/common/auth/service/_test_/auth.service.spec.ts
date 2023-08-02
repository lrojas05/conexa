import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { AuthService } from '../auth.service';
import { JwtService} from '@nestjs/jwt';
import mongoose, { Model } from 'mongoose';
import { UpdateUserDto } from 'src/users/dto/updateUser.dto';
import { User, UserSchema } from '../../../../users/schema/user.schema';
import { HttpException, HttpStatus } from '@nestjs/common';


describe('AuthService', () => {
  let service: AuthService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: getModelToken('User'),
          useValue: Model<User>,
        },
        JwtService,
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('validateUser', () => {
    const UserModel = mongoose.model('User', UserSchema);

    const updateUserDto: UpdateUserDto = {
      firstName: 'nasdfsd',
      lastName: 'maria',
      email: 'maria@gmail.com',
      password: 'asdasd',
    };

    const mockDocument: Document = {
      _id: 'prueba',
      firstName: 'nasdfsd',
      lastName: 'maria',
      email: 'maria@gmail.com',
      password: 'asdasd',
      __v: 0,
    };

    const response = jest
      .spyOn(UserModel, 'findOne')
      .mockResolvedValue(mockDocument);

    const userReal = UserModel.findOne({ email: updateUserDto.email });

    return expect(response.mock.results[0].value).toEqual(userReal);
  });

  it('validateEmail', async () => {
    const UserModel = mongoose.model('User', UserSchema);

    const response = (UserModel.findOne = jest
      .fn()
      .mockImplementation(() =>
        Promise.reject(
          new HttpException('email duplicate', HttpStatus.NOT_ACCEPTABLE),
        ),
      ));

    return expect(response).rejects.toThrow('email duplicate');
  });

  it('generateJWT', async () => {
    const payload = {
      firstName: 'maria',
      lastName: 'rojas',
    };

    const mockToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJtYXJpYSIsImxhc3ROYW1lIjoicm9qYXMiLCJpYXQiOjE2OTA5Mzk3NTV9.NnMofl__M6guE_Ks9uhWqyhujn2dXN0uoxUndBIi7uU';
    
    const tokenMock = jest.spyOn(jwtService, 'sign').mockReturnValue(mockToken);
    const tokenReal = jwtService.sign(payload, {secret: 'default_secret', privateKey : 'private_key'} ) 

    return expect(tokenMock.mock.results[0].value).toEqual(tokenReal);
  });
});
