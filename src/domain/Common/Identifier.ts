import { Field, ID, Int } from '@nestjs/graphql'
import { PrimaryGeneratedColumn } from 'typeorm';
import SuperEntity from '../Entities/SuperEntity';

export abstract class Identifier<T> extends SuperEntity {
  @Field(type => Int)
  @PrimaryGeneratedColumn()
  id: number;
}
