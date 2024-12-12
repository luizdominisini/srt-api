import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRoutesDto } from './dto/create-routes.dto';

@Injectable()
export class RoutesService {
  constructor(private readonly prismaService: PrismaService) {}
  async createRoutes(createRoutesDto: CreateRoutesDto) {
    return createRoutesDto;
  }
}
