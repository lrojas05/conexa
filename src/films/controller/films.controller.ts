/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';


import { ApiHeader, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { FilmsService } from '../service/films.service';

import { RolesGuard } from 'src/common/roles/guard/roles.guard';
import { Roles } from 'src/common/roles/decorator/roles.decorator';
import { Role } from 'src/common/roles/enum/roles.enum';

import { CreateFilmDto } from '../dto/createFilm.dto';
import { UpdateFilmDto } from '../dto/updateFilm.dto';

@ApiTags('Films')
@UseGuards(RolesGuard)
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

  @ApiOperation({ summary: 'Find film by id' })
  @ApiHeader({ name: 'rol', required: true })
  @Roles(Role.User)
  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Find film successfully',
  })
  async findOneFilm(@Param('id') id: string) {
    return await this.filmsService.findOneFilm(+id);
  }

  @ApiOperation({ summary: 'create film' })
  @ApiHeader({ name: 'rol', required: true })
  @ApiResponse({
    status: 201,
    description: 'film created.',
    type: () => CreateFilmDto,
  })
  @Roles(Role.Admin)
  @Post()
  async createFilm(@Body() film: CreateFilmDto) {
    return this.filmsService.createFilm(film);
  }

  @ApiOperation({ summary: 'update film' })
  @ApiHeader({ name: 'rol', required: true })
  @ApiResponse({
    status: 204,
    description: 'film updated.',
  })
  @Roles(Role.Admin)
  @Patch(':id')
  async updateFilm(
    @Param('id') id: string,
    @Body() updateFilmDto: UpdateFilmDto,
  ) {
    updateFilmDto.edited = new Date();
    return this.filmsService.updateFilm(id, updateFilmDto);
  }

  @ApiOperation({ summary: 'delete film' })
  @ApiHeader({ name: 'rol', required: true })
  @ApiResponse({
    status: 200,
    description: 'deleted film',
  })
  @Roles(Role.Admin)
  @Delete(':id')
  removeFilm(@Param('id') id: string) {
    return this.filmsService.removeFilm(id);
  }
}
