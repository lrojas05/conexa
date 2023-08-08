import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { firstValueFrom } from 'rxjs';

import { UpdateFilmDto } from '../dto/updateFilm.dto';
import { CreateFilmDto } from '../dto/createFilm.dto';
import { Film, FilmDocument } from '../schema/film.schema';

@Injectable()
export class FilmsService {
  constructor(
    @InjectModel(Film.name) private readonly filmModel: Model<FilmDocument>,
    private readonly httpService: HttpService,
  ) {}

  async findAllFilms(): Promise<any> {
    try {
      const response = await firstValueFrom(
        this.httpService.get('https://swapi.dev/api/films/'),
      );
      return response.data;
    } catch (error) {
      throw new HttpException('film not found', HttpStatus.NOT_FOUND);
    }
  }

  async findOneFilm(id: number) {
    try {
      const response = await firstValueFrom(
        this.httpService.get(`https://swapi.dev/api/films/${id}`),
      );

      return response.data;
    } catch (error) {
      throw new HttpException('film not found', HttpStatus.NOT_FOUND);
    }
  }

  async createFilm(film: CreateFilmDto): Promise<any> {
    let id = 6;

    const createFilm = new this.filmModel(film);
    createFilm.created = new Date();
    createFilm.film_id = ++id;
    const documentNew = await createFilm.save();

    return documentNew.film_id;
  }

  async updateFilm(id: number, films: UpdateFilmDto): Promise<any> {
    const updateFilm = await this.filmModel
      .updateOne({ film_id: id }, films)
      .exec();
    if (updateFilm.matchedCount === 0)
      throw new HttpException('film not found', HttpStatus.NOT_FOUND);
    return 'Ok';
  }

  async removeFilm(id: string): Promise<any> {
    const deleted = await this.filmModel.deleteOne({ film_id: id });
    if (deleted.deletedCount === 0)
      throw new HttpException('film not found', HttpStatus.NOT_FOUND);
    return 'Ok';
  }
}
