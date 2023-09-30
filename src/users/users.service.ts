import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { FileEntity } from 'src/files/entities/file.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity) //внедрение репозитория FileEntity
    private repository: Repository<UserEntity>, //можем использовать методы репозитория там где нужно
  ) {}

  async findByEmail(email: string) {
    //метод поиска пользователя по e-mail
    return this.repository.findOneBy({
      //findOneBy() - это метод репозитория TypeORM, который позволяет найти одну запись в базе данных по указанным критериям.
      email,
    });
  }

  async findById(id: number) {
    //метод поиска пользователя по e-mail
    return this.repository.findOneBy({
      id,
    });
  }

  create(dto: CreateUserDto) {
    //для определения структуры данных
    return this.repository.save(dto); //dto-data transform objec- объект, представляющий данные для передачи между различными частями приложения
    //н содержит только те данные, которые необходимы для выполнения определенной операции, и может использоваться для уменьшения количества запросов
    //к базе данных или другим удаленным сервисам
  }
}
