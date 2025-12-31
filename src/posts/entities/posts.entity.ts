import { Transform } from 'class-transformer';
import { IsString } from 'class-validator';
import { join } from 'path';
import { POST_PUBLIC_IMAGE_PATH } from 'src/common/const/path.const';
import { BaseModel } from 'src/common/entity/base.entity';
import { stringValidationMessage } from 'src/common/validation-message/string-validation.message';
import { UserModel } from 'src/users/entities/users.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class PostModel extends BaseModel {
  // 1) UsersModel과 연동한다 Foreing Key(외래키)를 이용해서.
  // 2) null이 될 수 없다.
  @ManyToOne(() => UserModel, (user) => user.posts, {
    nullable: false,
  })
  author: UserModel;

  @Column()
  @IsString({
    message: stringValidationMessage,
  })
  title: string;

  @Column()
  @IsString({
    message: stringValidationMessage,
  })
  content: string;

  // DB 에는 이미지의 "위치"를 저장
  @Column({
    nullable: true,
  })
  // value는 키값(image)에 입력된 값을 의미한다.
  @Transform(({ value }) => value && `/${join(POST_PUBLIC_IMAGE_PATH, value)}`)
  image?: string;

  @Column()
  likeCount: number;

  @Column()
  commentCount: number;
}
