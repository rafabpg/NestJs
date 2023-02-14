import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { CreateUserRepository } from './repositories/create_user_repository';
import { PrismaCreateUserRepository } from './repositories/prisma/prisma-create-user-repository';
import { Body } from '@nestjs/common';
import { Create_user_body } from './dtos/Create_user_body';


describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        PrismaService,
        {
          provide:CreateUserRepository,
          useClass:PrismaCreateUserRepository
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
