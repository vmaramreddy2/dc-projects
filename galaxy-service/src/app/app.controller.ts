import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { GalaxyAttributes } from './galaxy.interface';

@Controller('galaxies')
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Post('create')
  async createOrUpdateGalaxy(@Body() galaxy: GalaxyAttributes): Promise<void> {
      await this.appService.createOrUpdateGalaxy(galaxy);
  }
}
