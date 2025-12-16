import { PostModel } from 'src/posts/entities/posts.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { RolesEnum } from '../const/roles.const';
import { BaseModel } from 'src/common/entity/base.entity';
import { IsEmail, IsString, Length } from 'class-validator';
import { lengthValidationMessage } from 'src/common/validation-message/length-validation.message';
import { stringValidationMessage } from 'src/common/validation-message/string-validation.message';
import { emailValidationMessage } from 'src/common/validation-message/email-validation.message';
import { Exclude } from 'class-transformer';

@Entity()
export class UserModel extends BaseModel {
  @Column({
    //  1)
    length: 20,
    //  2)
    unique: true,
  })
  @IsString({
    message: stringValidationMessage,
  })
  @Length(1, 20, {
    message: lengthValidationMessage,
  })
  // 1) 길이가 20을 넘지 않을 것.
  // 2) 유일무이한 값이 될 것 (중복 방지)
  nickname: string;

  @Column({
    unique: true,
  })
  @IsString({
    message: stringValidationMessage,
  })
  @IsEmail(
    {},
    {
      message: emailValidationMessage,
    },
  )
  // 1) 유일무이한 값이 될 것 (중복 방지)
  email: string;

  @Column()
  @IsString({
    message: stringValidationMessage,
  })
  @Length(3, 8, {
    message: lengthValidationMessage,
  })

  /**
   * Exclude 에 2개 옵션, 옵션을 넣지 않으면 두 상황에 모두 적용.
   * 그렇기에 요청 상황에서도 password 를 못받는 상황이 됨.
   *
   * Request
   * frontned -> backend
   * plain object (JSON) -> class instance (dto)
   *
   * Response
   * backend -> frontend
   * class instance (dto) -> plain object (JSON)
   *
   * toClassOnly -> class instance 변환될때만
   * toPlainOnly -> plain object로 변환될때만
   */
  // 응답 상황에만 Exclude 적용.
  @Exclude({
    toPlainOnly: true,
  })
  password: string;

  @Column({
    // Object.values 를 사용해서 RolesEnum 에 값을  enum 으로 지정.
    enum: Object.values(RolesEnum),
    default: RolesEnum.USER,
  })
  role: RolesEnum;

  @OneToMany(() => PostModel, (post) => post.author)
  posts: PostModel[];
}
