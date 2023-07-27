import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsDate,
  IsNumber,
  IsArray,
  IsOptional,
} from 'class-validator';

export class CreateFilmDto {
  @ApiProperty({ example: 'Maria', description: 'Nombre del usuario' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ example: 1213, description: 'Nombre del usuario' })
  @IsNotEmpty()
  @IsNumber()
  episode_id: number;

  @ApiProperty({ example: 'Maria', description: 'Nombre del usuario' })
  @IsNotEmpty()
  @IsString()
  opening_crawl: string;

  @ApiProperty({ example: 'Maria', description: 'Nombre del usuario' })
  @IsNotEmpty()
  @IsString()
  director: string;

  @ApiProperty({ example: 'Maria', description: 'Nombre del usuario' })
  @IsNotEmpty()
  @IsString()
  producer: string;

  @ApiProperty({ example: 'dd-mm-yyyy', description: 'Nombre del usuario' })
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  release_date: Date;

  @ApiProperty({ example: 'Maria', description: 'Nombre del usuario' })
  @IsNotEmpty()
  @IsArray()
  characters: [string];

  @ApiProperty({ example: 'Maria', description: 'Nombre del usuario' })
  @IsNotEmpty()
  @IsArray()
  planets: [string];

  @ApiProperty({ example: 'Maria', description: 'Nombre del usuario' })
  @IsNotEmpty()
  @IsArray()
  starships: [string];

  @ApiProperty({ example: 'Maria', description: 'Nombre del usuario' })
  @IsNotEmpty()
  @IsArray()
  vehicles: [string];

  @ApiProperty({ example: 'Maria', description: 'Nombre del usuario' })
  @IsNotEmpty()
  @IsArray()
  species: [string];

  @ApiProperty({ example: 'dd-mm-yyyy', description: 'Nombre del usuario' })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  created: Date;

  @ApiProperty({ example: 'dd-mm-yyyy', description: 'Nombre del usuario' })
  @IsOptional()
  @IsDate()
  edited: Date;

  @ApiProperty({ example: 'Maria', description: 'Nombre del usuario' })
  @IsNotEmpty()
  @IsString()
  url: string;
}
