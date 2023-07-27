/* eslint-disable prettier/prettier */
import { SetMetadata } from '@nestjs/common';
import { Role } from '../enum/roles.enum';

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
