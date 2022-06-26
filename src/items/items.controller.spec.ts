import { Test, TestingModule } from '@nestjs/testing';
import { ItemsController } from './items.controller';

describe('ItemsController', () => {
  let controller: ItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemsController],
    }).compile();

    controller = module.get<ItemsController>(ItemsController);
  });

  return 'Hello World!'
});
