import { Injectable } from '@nestjs/common';
import { CreateTrDto } from './dto/create-tr.dto';
import { UpdateTrDto } from './dto/update-tr.dto';

@Injectable()
export class TrsService {
  create(createTrDto: CreateTrDto) {
    return 'This action adds a new tr';
  }

  findAll() {
    return `This action returns all trs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tr`;
  }

  update(id: number, updateTrDto: UpdateTrDto) {
    return `This action updates a #${id} tr`;
  }

  remove(id: number) {
    return `This action removes a #${id} tr`;
  }
}
