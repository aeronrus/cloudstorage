import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileEntity } from './entities/file.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(FileEntity) //внедрение репозитория FileEntity
    private repository: Repository<FileEntity>, //можем использовать методы репозитория там где нужно
  ) {}

  findAll() {
    return this.repository.find();
  }
}
