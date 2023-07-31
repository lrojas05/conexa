import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './users/module/users.module';
import { FilmsModule } from './films/modules/films.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal : true,
    }
    ),
   MongooseModule.forRoot('mongodb://127.0.0.1:27017/conexa', {serverSelectionTimeoutMS: 1000}),
    UsersModule,
    FilmsModule,
    ]
})
export class AppModule {}
