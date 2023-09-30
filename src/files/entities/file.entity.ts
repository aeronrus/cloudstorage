import { UserEntity } from 'src/users/entities/user.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'; //ДЕКОРАТОРЫ для опредения модели данных, которая будет использоваться в приложении
//(определяет структуру таблицы в бд и связи между таблицами)

@Entity('files') //для того, чтобы сделать соединение с базой данных
export class FileEntity {
  @PrimaryGeneratedColumn() //первичный ключ таблицы в базе данных.
  //Он генерирует уникальное значение для каждой записи в таблице автоматически
  //при добавлении новой записи
  id: number;

  @Column()
  filename: string;

  @Column()
  originalName: string;

  @Column()
  size: number;

  @Column()
  mimeType: string;

  @ManyToOne(() => UserEntity, (user) => user.files)
  users: UserEntity;
  @DeleteDateColumn() //позволяет сохранять историю изменений и восстанавливать удаленные данные при необходимости.
  deletedAt?: Date; //хранит дату удаления записи
}
