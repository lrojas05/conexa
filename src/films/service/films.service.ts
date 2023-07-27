import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { CreateFilmDto } from '../dto/createFilm.dto';
import { UpdateFilmDto } from '../dto/updateFilm.dto';
import { Model } from 'mongoose';
import { Film } from '../schema/film.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class FilmsService {
  constructor(
    @InjectModel(Film.name) private filmModel: Model<Film>,
    private readonly httpService: HttpService,
  ) {}

  async findAllFilms(): Promise<any> {
    const { data } = await firstValueFrom(
      this.httpService.get('https://swapi.dev/api/films/'),
    );
    return data;
  }

  async findOneFilm(id: number): Promise<any> {
    const { data } = await lastValueFrom(
      this.httpService.get(`https://swapi.dev/api/films/${id}`),
    );
    return data;
  }

  async createFilm(film: CreateFilmDto): Promise<Film> {
    const createFilm = new this.filmModel(film);
    createFilm.created = new Date();
    return createFilm.save();
  }

  async updateFilm(id: string, film: UpdateFilmDto): Promise<Film> {
    const updateFilm = await this.filmModel.findOneAndUpdate({ _id: id }, film);
    return updateFilm;
  }

  async removeFilm(id: string): Promise<Film> {
    const deleted = await this.filmModel.findOneAndDelete({ _id: id });
    return deleted;
  }
}
