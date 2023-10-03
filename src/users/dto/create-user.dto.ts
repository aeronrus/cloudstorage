//описываем класс данных, которые нужно передавать между частями прил-я

import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'test@mail.ru',
  })
  email: string;
  @ApiProperty({
    default: 'Aeron_Rus',
  })
  fullName: string;
  @ApiProperty({
    default: '123',
  })
  passworrd: string;
}
