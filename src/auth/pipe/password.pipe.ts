// Nestjs 에서 커스텀 파이프를 만들려면 필요한 import
import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

// 모든 빌트인 , 커스텀 파이프는 PipeTransform을 implements 한다.
// 모든 파이프는 injectable() 붙힘.
@Injectable()
export class PasswordPipe implements PipeTransform {
  /**
   *  value -> 실제로 입력 받은 값.
   *  metadata ->
   */
  transform(value: any, metadata: ArgumentMetadata) {
    const password = value.toString();
    if (password.length > 8) {
      throw new BadRequestException('비밀번호가 너무 길다.');
    }
    return password;
  }
}

@Injectable()
export class MaxLengthPipe implements PipeTransform {
  constructor(private readonly length: number) {}

  transform(value: any, metadata: ArgumentMetadata) {
    if (value.toString().length > this.length) {
      throw new BadRequestException(`최대 길이는 ${this.length}입니다.`);
    }
    return value.toString();
  }
}

@Injectable()
export class MinLengthPipe implements PipeTransform {
  constructor(private readonly length: number) {}

  transform(value: any, metadata: ArgumentMetadata) {
    if (value.toString().length < this.length) {
      throw new BadRequestException(`최소 길이는 ${this.length}입니다.`);
    }

    return value.toString();
  }
}
