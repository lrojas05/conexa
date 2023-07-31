import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { CreateUserDto } from './createUser.dto';

export class UpdateUserDto extends PartialType(CreateUserDto){
  @ApiProperty({ example: 'Maria', description: 'Email del usuario' })
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: 'Maria', description: 'Contraseña del usuario' })
  @IsNotEmpty()
  password: string;
}
