import { Injectable } from '@nestjs/common';


import { AuthService } from 'src/common/auth/service/auth.service';
import { CreateUserDto } from '../dto/createUser.dto';
import { UpdateUserDto } from '../dto/updateUser.dto';

@Injectable()
export class UsersService {
  constructor(
    private authService: AuthService,
  ) {}

  async signUp(createUserDto: CreateUserDto): Promise<any> {
    const email = await this.authService.validateEmail(createUserDto);
    const password = await this.authService.createPassword(createUserDto);
    return {
      email: email,
      password: password,
    };
  }

  async signIn(updateUserDto: UpdateUserDto): Promise<any> {
    const user = await this.authService.validateUser(updateUserDto);
    const access_token = this.authService.generateJWT(user);
    return access_token;
  }
}
