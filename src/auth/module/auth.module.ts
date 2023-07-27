import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from 'src/auth/controller/auth.controller';
import { AuthService } from 'src/auth/service/auth.service';
import { UsersModule } from 'src/users/module/users.module';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      //secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
