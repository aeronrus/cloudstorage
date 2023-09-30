import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserSevice {
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

  create(CreateUserDto) {
    //для определения структуры данных
    return this.repository.save(dto); //dto-data transform objec- объект, представляющий данные для передачи между различными частями приложения
    //н содержит только те данные, которые необходимы для выполнения определенной операции, и может использоваться для уменьшения количества запросов
    //к базе данных или другим удаленным сервисам
  }
}
