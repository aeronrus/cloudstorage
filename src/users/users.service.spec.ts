import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
