import { Body, Controller, Post } from '@nestjs/common';
import { CreateRoutesDto } from './dto/create-routes.dto';
import { RoutesService } from './routes.service';

@Controller('routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}
  @Post('create')
  async createRoutes(@Body() createRoutesDto: CreateRoutesDto) {
    return this.routesService.createRoutes(createRoutesDto);
  }
}
