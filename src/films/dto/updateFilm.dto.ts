import { ApiProperty } from '@nestjs/swagger';
import { CreateFilmDto } from './createFilm.dto';

export class UpdateFilmDto extends CreateFilmDto {

    @ApiProperty({ example: 1213, description: 'Nombre del usuario' })
    film_id: number;
  
}
