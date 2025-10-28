import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';

/**
 * author : string;
 * title: string;
 * content: string;
 * likeCount: number;
 * commentCount: number;
 */

interface Post {
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}
// 1차 path 주소 /post
// controller 클래스에 있는 "모든" 라우터 앞에 붙는 접두어.
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  // 2차 path 주소
  @Get()
  getPost(): Post {
    return {
      author: 'newjeans_official',
      title: '뉴진스 민지',
      content: '메이크업 고치고 있는 민지',
      likeCount: 10000000,
      commentCount: 9999999,
    };
  }
}
