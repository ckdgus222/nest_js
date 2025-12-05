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



class CchService{
  name: string,
  age: number,


  getAge(){
    return this.name
  }
}

class CchController{
  cchService: CchService
  constructor(cchService:CchService){
    this.cchService = cchService
  }

  getAgeOver(){
    return this.cchService.getAge()
  }
}

const CchServiceOne = new CchService()
const CchControllerOne = new CchController(CchServiceOne)

CchControllerOne.getAgeOver()