import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { UsersService } from '../service/users.service';
import { CreateUserDto } from '../dto/createUser.dto';
import { UpdateUserDto } from '../dto/updateUser.dto';
import { JwtAuthGuard } from '../../common/jwt/guard/jwt.guard';


@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'user register' })
  @ApiResponse({
    status: 201,
    description: 'register successful',
    type: () => CreateUserDto,
  })
  @Post('register')

   signUp(@Body() user: CreateUserDto) { 
     return this.usersService.signUp(user);

  }

  @ApiOperation({ summary: 'user login' })
  @ApiResponse({
    status: 200,
    description: 'login successful ',
    type: () => UpdateUserDto,
  })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  singIn(@Body() user: UpdateUserDto) {
    return this.usersService.signIn(user);
  }
}
