import { Injectable } from '@nestjs/common';
import { DirectionsService } from '../maps/directions/directions.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRoutesDto } from './dto/create-routes.dto';

@Injectable()
export class RoutesService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly directionService: DirectionsService,
  ) {}
  async createRoutes(createRoutesDto: CreateRoutesDto) {
    const { available_travel_modes, geocoded_waypoints, routes, request } =
      await this.directionService.getDirections(
        createRoutesDto.source_id,
        createRoutesDto.destination_id,
      );

    const legs = routes[0].legs[0];

    return this.prismaService.route.create({
      data: {
        name: createRoutesDto.nome,
        source: {
          name: legs.start_address,
          location: {
            lat: legs.start_location.lat,
            log: legs.start_location.lng,
          },
        },
        destination: {
          name: legs.end_address,
          location: {
            lat: legs.end_location.lat,
            log: legs.end_location.lng,
          },
        },
        duration: legs.duration.value,
        distance: legs.distance.value,
        directions: JSON.parse(
          JSON.stringify({
            available_travel_modes,
            geocoded_waypoints,
            routes,
            request,
          }),
        ),
      },
    });
  }

  async findAll() {
    return this.prismaService.route.findMany();
  }

  async findOne(id: string) {
    return this.prismaService.route.findUnique({ where: { id: id } });
  }
}
