import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from './users/module/users.module';
import { FilmsModule } from './films/modules/films.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/conexa'),
    UsersModule,
    FilmsModule,
    
  ],
})
export class AppModule {}
