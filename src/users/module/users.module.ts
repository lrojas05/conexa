import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../constants/constants';

import { AuthService } from 'src/common/auth/service/auth.service';
import { UsersController } from '../controllers/users.controller';
import { UsersService } from '../service/users.service';

import { User, UserSchema } from '../schema/user.schema';
import { JwtStrategy } from 'src/common/jwt/strategies/jwt.strategy';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, AuthService, JwtStrategy],
})
export class UsersModule {}
