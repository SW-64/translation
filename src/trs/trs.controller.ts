import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrsService } from './trs.service';
import { CreateTrDto } from './dto/create-tr.dto';
import { UpdateTrDto } from './dto/update-tr.dto';

@Controller('trs')
export class TrsController {
  constructor(private readonly trsService: TrsService) {}

  @Post()
  create(@Body() createTrDto: CreateTrDto) {
    return this.trsService.create(createTrDto);
  }

  @Get()
  findAll() {
    return this.trsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrDto: UpdateTrDto) {
    return this.trsService.update(+id, updateTrDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trsService.remove(+id);
  }
}
