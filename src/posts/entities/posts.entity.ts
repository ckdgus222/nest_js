import { BaseModel } from 'src/common/entity/base.entity';
import { UserModal } from 'src/users/entities/users.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class PostModal extends BaseModel {
  // 1) UsersModel과 연동한다 Foreing Key(외래키)를 이용해서.
  // 2) null이 될 수 없다.
  @ManyToOne(() => UserModal, (user) => user.posts, {
    nullable: false,
  })
  author: UserModal;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  likeCount: number;

  @Column()
  commentCount: number;
}
