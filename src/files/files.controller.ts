import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  MaxFileSizeValidator,
  ParseFilePipe,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger'; //для объединенния тегов в документации
import { FileInterceptor } from '@nestjs/platform-express';
import { fileStorage } from './storage';

@Controller('files') //для работы с документацией
@ApiTags('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Get()
  findAll() {
    return this.filesService.findAll();
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: fileStorage,
    }),
  )
  @ApiConsumes('multipart/form-data') //описывает как API должен обрабатывать запросы с загрузкой файлов
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          //определяем что внутри запроса будет объект с единственным свойством file
          type: 'string', //у file есть тип-строковое значение
          format: 'binary', //у file есть format-бинарное значение
        },
      },
    },
  })
  create(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 5 })],
      }),
    )
    file: Express.Multer.File,
  ) {
    return file;
  }
}
