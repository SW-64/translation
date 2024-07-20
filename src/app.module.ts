import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrsModule } from './trs/trs.module';

@Module({
  imports: [TrsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
