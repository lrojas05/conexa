import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from '../service/users.service';
import { CreateUserDto } from '../dto/createUser.dto';
import { User } from '../schema/user.schema';
import { getModelToken } from '@nestjs/mongoose';
import { UpdateUserDto } from '../dto/updateUser.dto';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            signUp: jest.fn(),
            singIn: jest.fn(),
          },
        },
        {
          provide: getModelToken('User'),
          useValue: jest.fn()
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('register successful', async () => {
    
    const createUserDto : CreateUserDto = {
      firstName : 'nasdfsd',
      lastName :  'maria',
      email: 'asdasd',
      password: 'asdasd',
    }; 

    const user = {
      email: 'asdasd',
      password: 'asdasd',
    };

    jest.spyOn(controller, 'signUp').mockResolvedValue(user);
  
    const userCreated = await controller.signUp(createUserDto);
    expect(createUserDto.email).toEqual(userCreated.email);
    expect(createUserDto.password).toEqual(userCreated.password);

});

  it('login successful', async () => {

    const updateUserDto : UpdateUserDto = {
      email: 'asdasd',
      password: 'asdasd',
    }; 

    const response = {
     access_token : 'JKASDHJA',
     user : {
          firstName : 'maria',
          lastName : 'maria',
          email: 'asdasd',
          password: 'asdasd',
        }
    };

    jest.spyOn(controller, 'singIn').mockResolvedValue(response)

    const userLogin = await controller.singIn(updateUserDto);
    expect(userLogin.access_token).toBeDefined();
    expect(userLogin.user).toBeDefined();
  });

});
