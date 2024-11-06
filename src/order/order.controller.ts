import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from '@prisma/client';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async getAllOrders() {
    return this.orderService.getAllOrders();
  }

  @Post()
  async createOrder(@Body() data: Order) {
    return this.orderService.createUser(data);
  }
}
