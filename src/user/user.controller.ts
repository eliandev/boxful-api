import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User, Order } from '@prisma/client';

type UserWithOrders = User & {
  orders: Order[];
};

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Post()
  async createUser(@Body() data: User) {
    return this.userService.createUser(data);
  }

  @Post('createUserWithOrders')
  async createUserWithOrders(@Body() data: UserWithOrders) {
    return this.userService.createUserWithOrders(data);
  }

  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }
}
