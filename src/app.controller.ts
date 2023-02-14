import { Body, Controller, Post } from '@nestjs/common';
import { Create_user_body } from './dtos/Create_user_body';
import { CreateUserRepository } from './repositories/create_user_repository';

@Controller('app')
export class AppController {
  constructor(private readonly createUserRepository: CreateUserRepository) {}

  @Post('hello')
  async getHello(@Body() body:Create_user_body) {
    const { name,email} = body;
    this.createUserRepository.create(name,email);
  }

}
