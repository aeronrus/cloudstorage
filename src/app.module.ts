import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/entities/user.entity';
import { FileEntity } from './files/entities/file.entity';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '	silly.db.elephantsql.com',
      port: 5432,
      username: 'jnetlxsj',
      password: '8edgbrGQciXoRD72MlTFGqUnuD_z968P',
      database: 'jnetlxsj',
      entities: [UserEntity, FileEntity], //чтобы автоматически синхронизировать все изменения Entity в реальной таблице
      synchronize: true,
    }),
    FilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
