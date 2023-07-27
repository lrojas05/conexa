import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from '../dto/createUser.dto';
import { Model } from 'mongoose';
import { User } from '../schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UpdateUserDto } from '../dto/updateUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  //TODO validación de email usado

  async signUp(user: CreateUserDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(user.password, salt);
    user.password = hashPassword;
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async signIn(user: UpdateUserDto): Promise<any> {
    const users = await this.userModel.findOne({ email: user.email });
    if (users) {
      const checkpassword = await bcrypt.compare(user.password, users.password);
      if (!checkpassword) {
        throw new UnauthorizedException();
      }
      const payload = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      };

      const token = this.jwtService.sign(payload);
      return token;
    }
    return 'Usuario Existe';
  }
}
