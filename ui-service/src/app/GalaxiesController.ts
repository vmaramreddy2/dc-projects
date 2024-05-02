import { Controller, Get, Post, Body } from '@nestjs/common';
import { GalaxiesService } from './galaxies.service';
import { Galaxy } from './galaxy.entity';

@Controller('api/galaxies')
export class GalaxiesController {
  constructor(private readonly galaxiesService: GalaxiesService) {}

  @Get()
  findAll(): Promise<Galaxy[]> {
    return this.galaxiesService.findAll();
  }

  @Post()
  create(@Body() galaxy: Galaxy): Promise<Galaxy> {
    return this.galaxiesService.create(galaxy);
  }
}
