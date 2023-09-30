import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // внтруи скобок может быть путь(route), на который надо реагировать
export class AppController {
  constructor(private readonly appService: AppService) {} //внутри конструктора указываем нужные нам провайдеры

  @Get() //декоратор метода. внутрь скобок можнр передать  доп параметры(путь, доп route)
  getHello(): string {
    return this.appService.getHello();
  }
}
