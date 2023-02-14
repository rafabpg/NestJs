import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { CreateUserRepository } from './repositories/create_user_repository';
import { PrismaCreateUserRepository } from './repositories/prisma/prisma-create-user-repository';


@Module({
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide:CreateUserRepository,
      useClass:PrismaCreateUserRepository
    },
  ],
})
export class AppModule {}
