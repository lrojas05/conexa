import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { APP_FILTER } from '@nestjs/core';

import { UsersModule } from './users/module/users.module';
import { FilmsModule } from './films/modules/films.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/conexa', {serverSelectionTimeoutMS: 1000}),
    UsersModule,
    FilmsModule,
    ConfigModule.forRoot()]
})
export class AppModule {}
