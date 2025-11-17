import { PostModal } from 'src/posts/entities/posts.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RolesEnum } from '../const/roles.const';

@Entity()
export class UserModal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    //  1)
    length: 20,
    //  2)
    unique: true,
  })
  // 1) 길이가 20을 넘지 않을 것.
  // 2) 유일무이한 값이 될 것 (중복 방지)
  nickname: string;

  @Column({
    unique: true,
  })
  // 1) 유일무이한 값이 될 것 (중복 방지)
  email: string;

  @Column()
  password: string;

  @Column({
    // Object.values 를 사용해서 RolesEnum 에 값을  enum 으로 지정.
    enum: Object.values(RolesEnum),
    default: RolesEnum.USER,
  })
  role: RolesEnum;

  @OneToMany(() => PostModal, (post) => post.author)
  posts: PostModal[];
}
