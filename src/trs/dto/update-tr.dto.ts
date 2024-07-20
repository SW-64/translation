import { PartialType } from '@nestjs/mapped-types';
import { CreateTrDto } from './create-tr.dto';

export class UpdateTrDto extends PartialType(CreateTrDto) {}
