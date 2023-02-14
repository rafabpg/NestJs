import { Body, Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { Create_user_body } from './dtos/Create_user_body';

@Controller('app')
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get('hello')
  async getHello(@Body() body:Create_user_body) {
    const { name,email} = body;
    const member = await this.prisma.user.create({
      data:{
        email:email,
        name:name,
        github:"https://github.com/",
        instagram:"https://www.linkedin.com/feed/",
        linkedin:"https://www.instagram.com/"
      }
    }) 
    return {member}
  }
}
