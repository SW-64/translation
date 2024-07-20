import { Test, TestingModule } from '@nestjs/testing';
import { TrsController } from './trs.controller';
import { TrsService } from './trs.service';

describe('TrsController', () => {
  let controller: TrsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrsController],
      providers: [TrsService],
    }).compile();

    controller = module.get<TrsController>(TrsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
