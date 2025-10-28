import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

// 1차 path 주소 /post
// controller 클래스에 있는 "모든" 라우터 앞에 붙는 접두어.
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
