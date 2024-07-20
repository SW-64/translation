import { Module } from '@nestjs/common';
import { TrsService } from './trs.service';
import { TrsController } from './trs.controller';

@Module({
  controllers: [TrsController],
  providers: [TrsService],
})
export class TrsModule {}
