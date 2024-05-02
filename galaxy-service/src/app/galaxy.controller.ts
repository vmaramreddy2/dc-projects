import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { GalaxyService } from './galaxy.service';
import { GalaxyAttributes } from './galaxy.interface';

@Controller('galaxies')
export class GalaxyController {
  constructor(private readonly galaxyService: GalaxyService) {}

  @Get()
  async findAll(): Promise<GalaxyAttributes[]> {
    return this.galaxyService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<GalaxyAttributes> {
    return this.galaxyService.findOne(id);
  }

  @Post()
  async create(@Body() galaxyData: Partial<GalaxyAttributes>): Promise<GalaxyAttributes> {
    return this.galaxyService.create(galaxyData);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() galaxyData: Partial<GalaxyAttributes>): Promise<GalaxyAttributes> {
    return this.galaxyService.update(id, galaxyData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.galaxyService.delete(id);
  }
}
