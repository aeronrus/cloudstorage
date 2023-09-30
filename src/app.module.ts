import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/entities/user.entity';
import { FileEntity } from './files/entities/file.entity';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  //декоратор, который обозначает, что это модуль. Модуль внутри принимает объект, внутри объекта есть свойства
  imports: [
    //первое свойство объекта(тут то, что модуль импортирует в себя)
    ConfigModule.forRoot(),
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [UserEntity, FileEntity], //чтобы автоматически синхронизировать все изменения Entity в реальной таблице
      synchronize: true,
    }),
    FilesModule,
    AuthModule,
  ],
  controllers: [AppController], //второе свойство объекта. Сюда подключаются все контроллеры
  providers: [AppService], //третье свойство объекта. Сюда подключаются все сервисы, реппоизтории
})
export class AppModule {}
