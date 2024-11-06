import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User, Order } from '@prisma/client';

type UserWithOrders = User & {
  orders: Order[];
};

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany({
      include: {
        orders: true,
      },
    });
  }

  async getUserById(id: number | string): Promise<User> {
    return this.prisma.user.findUnique({
      where: { id: Number(id) },
      include: {
        orders: true,
      },
    });
  }

  async createUser(data: User): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async createUserWithOrders(data: UserWithOrders): Promise<User> {
    return this.prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        lastName: data.lastName,
        collectAddress: data.collectAddress,
        date: new Date(data.date),
        phone: data.phone,
        deliveryAddress: data.deliveryAddress,
        department: data.department,
        state: data.state,
        referencePoint: data.referencePoint,
        indications: data.indications,
        orders: {
          create: data.orders.map((order: Order) => ({
            large: order.large,
            width: order.width,
            height: order.height,
            weight: order.weight,
            product: order.product,
          })),
        },
      },
      include: {
        orders: true,
      },
    });
  }

  async updateTask(id: number, data: User): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async deleteUser(id: number): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }
}
