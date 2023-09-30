import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserEntity } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  //настройка модуля
  controllers: [UsersController],
  providers: [UsersService],
  imports: [TypeOrmModule.forFeature([UserEntity])], //чтобы использовать UserEntity в других компонентах и сервиах
})
export class UsersModule {}
