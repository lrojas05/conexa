import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Maria', description: 'Nombre del usuario' })
  @IsNotEmpty()
  @IsString()
  readonly firstName: string;

  @ApiProperty({ example: 'Maria', description: 'Apellido del usuario' })
  @IsNotEmpty()
  @IsString()
  readonly lastName: string;

  @ApiProperty({ example: 'Maria', description: 'Email del usuario' })
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: 'Maria', description: 'Contraseña del usuario' })
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
}
