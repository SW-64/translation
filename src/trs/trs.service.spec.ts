import { Test, TestingModule } from '@nestjs/testing';
import { TrsService } from './trs.service';

describe('TrsService', () => {
  let service: TrsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrsService],
    }).compile();

    service = module.get<TrsService>(TrsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
