/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FilmsService } from '../service/films.service';
import { CreateFilmDto } from '../dto/createFilm.dto';
import { UpdateFilmDto } from '../dto/updateFilm.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Films')
@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @ApiOperation({ summary: 'Find All films' })
  @Get()
  @ApiResponse({
    status: 200,
    description: 'Find films successfully.',
  })
  async findAllFilms() {
    return await this.filmsService.findAllFilms();
  }

  //TODO validar que solo tengan acceso los usuarios regulares
  @ApiOperation({ summary: 'Find film by id' })
  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Find film successfully',
  })
  async findOneFilm(@Param('id') id: string) {
    return await this.filmsService.findOneFilm(+id);
  }

  //TODO validar que solo ADMIN tenga acceso
  @ApiOperation({ summary: 'create film' })
  @ApiResponse({
    status: 201,
    description: 'film created.',
    type: () => CreateFilmDto,
  })
  @Post()
  async createFilm(@Body() film: CreateFilmDto) {
    return this.filmsService.createFilm(film);
  }
  @ApiOperation({ summary: 'update film' })
  @ApiResponse({
    status: 204,
    description: 'film updated.',
  })
  @Patch(':id')
  async updateFilm(
    @Param('id') id: string,
    @Body() updateFilmDto: UpdateFilmDto,
  ) {
    updateFilmDto.edited = new Date();
    return this.filmsService.updateFilm(id, updateFilmDto);
  }

  @ApiOperation({ summary: 'delete film' })
  @ApiResponse({
    status: 200,
    description: 'deleted film',
  })
  @Delete(':id')
  removeFilm(@Param('id') id: string) {
    return this.filmsService.removeFilm(id);
  }
}
