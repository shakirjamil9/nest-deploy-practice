import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  login() {
    return 'Login Route';
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
