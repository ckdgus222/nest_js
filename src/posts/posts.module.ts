import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModal } from './entities/posts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostModal])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}


