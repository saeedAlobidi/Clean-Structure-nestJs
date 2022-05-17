import { IsNotEmpty } from 'class-validator';
import { Gender } from 'src/domain/Enum/Gender';

export class UserModal {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  gender: Gender = Gender.Man;
  @IsNotEmpty()
  filename: string = '';
  @IsNotEmpty()
  views: number = 0;
  @IsNotEmpty()
  isPublished: boolean = false;
}
