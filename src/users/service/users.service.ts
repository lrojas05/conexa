import { Injectable } from '@nestjs/common';

import { AuthService } from '../../common/auth/service/auth.service';
import { CreateUserDto } from '../dto/createUser.dto';
import { UpdateUserDto } from '../dto/updateUser.dto';

@Injectable()
export class UsersService {
  constructor(private authService: AuthService){}

  async signUp(createUserDto: CreateUserDto) {
    await this.authService.validateEmail(createUserDto);
    const userP = await this.authService.createPassword(createUserDto);
    return {
      email: userP.email,
    };
  }
  
  async signIn(updateUserDto: UpdateUserDto) {
    const user = await this.authService.validateUser(updateUserDto);
    
    const access_token = this.authService.generateJWT(user);
    return {
      access_token,
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    };
  }
}
