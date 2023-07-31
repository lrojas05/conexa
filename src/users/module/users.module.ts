import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';


import { AuthService } from '../../common/auth/service/auth.service';
import { UsersController } from '../controllers/users.controller';
import { UsersService } from '../service/users.service';
import { User, UserSchema } from '../schema/user.schema';
import { JwtStrategy } from '../../common/jwt/strategies/jwt.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.registerAsync({
      useFactory: async () => 
    ({
      secret: process.env.SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRATION_TIME},
    })
    })
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    AuthService,
    JwtStrategy
  ],
})
export class UsersModule {}
