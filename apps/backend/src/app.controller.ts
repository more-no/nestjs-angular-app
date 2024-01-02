import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Here is where we write oru

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
