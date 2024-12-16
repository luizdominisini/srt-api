import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class RoutesDriverService {
  constructor(private readonly prismaService: PrismaService) {}
  processRoute(dto: { route_id: string; lat: number; lng: number }) {}
}
