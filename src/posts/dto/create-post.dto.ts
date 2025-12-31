import { IsOptional, IsString } from 'class-validator';
import { PostModel } from '../entities/posts.entity';
import { PickType } from '@nestjs/mapped-types';

// Pick, Omit, Partial -> Type 반환
// PickType, OmitType, ParitalType -> 값을 반환

export class CreatePostDto extends PickType(PostModel, ['title', 'content']) {
  @IsString()
  @IsOptional()
  image?: string;
}
