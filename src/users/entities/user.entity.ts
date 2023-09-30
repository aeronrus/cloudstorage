import { FileEntity } from 'src/files/entities/file.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'; //для опредения модели данных, которая будет использоваться в приложении (определяет структуру таблицы в бд и связи между таблицами)

@Entity('users') //для того, чтобы сделать соединение с базой данных
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  fullName: string;

  @OneToMany(() => FileEntity, (file: FileEntity) => file.user) //1 пользователь может добавить много файлов(создать много записей в бд), поэтому связь один ко многим
  files: FileEntity[];
}
