import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiKeyGuard } from './middlewares/ApiKeyGuard.middleware';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(new ApiKeyGuard('12345'))
  getHello(): string {
    return this.appService.getHello();
  }
}
