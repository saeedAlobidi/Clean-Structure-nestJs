
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { Identifier } from '../Common/Identifier';
import { Gender } from '../Enum/Gender';
import { Field, ID, ObjectType } from '@nestjs/graphql'

@Entity()
@ObjectType()
export default class User extends Identifier<number> {
  @Field()
  @Column()
  name: string = '';
  @Field()
  @Column()
  gender: Gender = Gender.Man;
  @Field()
  @Column()
  description: string = '';
  @Field()
  @Column()
  filename: string = '';
  @Field()
  @Column()
  views: number = 0;
  @Field()
  @Column()
  isPublished: boolean = false;
}
