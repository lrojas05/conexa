import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { firstValueFrom } from 'rxjs';

import { UpdateFilmDto } from '../dto/updateFilm.dto';
import { CreateFilmDto } from '../dto/createFilm.dto';
import { Film } from '../schema/film.schema';

@Injectable()
export class FilmsService {
  constructor(
    @InjectModel(Film.name) private filmModel: Model<Film>,
    private readonly httpService: HttpService,
  ) {}

  async findAllFilms(): Promise<Film> {
    const response = await firstValueFrom(
      this.httpService.get('https://swapi.dev/api/films/'),
    );
    if (response.status === HttpStatus.NOT_FOUND)
      throw new HttpException('film not found', HttpStatus.NOT_FOUND);
    return response.data;
  }

  async findOneFilm(id: number): Promise<Film> {
    const response = await firstValueFrom(
      this.httpService.get(`https://swapi.dev/api/films/${id}`),
    );
    if (response.status === HttpStatus.NOT_FOUND)
      throw new HttpException('film not found', HttpStatus.NOT_ACCEPTABLE);
    return response.data;
  }

  async createFilm(film: CreateFilmDto): Promise<Film> {
    const updateFilm = await this.filmModel.exists(film);

    if (updateFilm ? updateFilm._id : '')
      throw new HttpException('film exists', HttpStatus.NOT_ACCEPTABLE);
      
      const createFilm = new this.filmModel(film);
      createFilm.created = new Date();
      const newFilm = await createFilm.save();
      return newFilm;
  }

  async updateFilm(id: string, film: UpdateFilmDto): Promise<Film> {
    const updateFilm = await this.filmModel.findOneAndUpdate({ _id: id }, film);
    if (updateFilm === null)
      throw new HttpException('film not found', HttpStatus.NOT_FOUND);
    return updateFilm;
  }

  async removeFilm(id: string): Promise<Film> {
    const deleted = await this.filmModel.findOneAndDelete({ _id: id });
    if (deleted === null)
      throw new HttpException('film not found', HttpStatus.NOT_FOUND);
    return deleted;
  }
}
