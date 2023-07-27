import { Module } from '@nestjs/common';
import { FilmsController } from '../controller/films.controller';
import { FilmsService } from '../service/films.service';
import { HttpModule } from '@nestjs/axios';
import { Film, FilmSchema } from '../schema/film.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Film.name, schema: FilmSchema }]),
    HttpModule,
  ],
  controllers: [FilmsController],
  providers: [FilmsService],
})
export class FilmsModule {}
