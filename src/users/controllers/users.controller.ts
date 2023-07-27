import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { CreateUserDto } from '../dto/createUser.dto';
import { UpdateUserDto } from '../dto/updateUser.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'user register' })
  @ApiResponse({
    status: 201,
    description: 'register successful',
    type: () => UpdateUserDto,
  })
  @Post('register')
  signUp(@Body() user: CreateUserDto) {
    return this.usersService.signUp(user);
  }

  @ApiOperation({ summary: 'user login' })
  @ApiResponse({
    status: 201,
    description: 'successful login',
    type: () => UpdateUserDto,
  })
  @Post('login')
  singIn(@Body() user: UpdateUserDto) {
    return this.usersService.signIn(user);
  }
}
