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
      expandVariables: true,
    }
    ),
   MongooseModule.forRoot(`mongodb://${process.env.MONGO_URI}/${process.env.MONGO_NAME}`, {serverSelectionTimeoutMS: +process.env.MONGO_TIMEOUT}),
    UsersModule,
    FilmsModule,
    ]
})
export class AppModule {}
