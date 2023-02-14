import {  PrismaClient } from "@prisma/client";
import { CreateUserRepository } from "../create_user_repository";
import { Injectable } from "@nestjs/common";

@Injectable()
class PrismaCreateUserRepository implements CreateUserRepository{

    constructor(private readonly prisma : PrismaClient){}

    async create(name: string, email: string): Promise<void> {
        await this.prisma.user.create({
              data:{
                email:email,
                name:name,
                github:"https://github.com/",
                instagram:"https://www.linkedin.com/feed/",
                linkedin:"https://www.instagram.com/",
              }
        })
     }  
}
export { PrismaCreateUserRepository}