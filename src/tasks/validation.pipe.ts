import { TaskStatus } from './task.model';
import { BadRequestException, PipeTransform } from "@nestjs/common";

export class ValidateTaskStatusPipe implements PipeTransform{
  readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.CLOSE
  ]

  transform(value:any){
    value = value.toUpperCase();

    if(!this.isStatusValid(value)){
      throw new BadRequestException(`${value} status is not valid`)
    }

    return value
  }


  private isStatusValid(value: any){
    const idx = this.allowedStatuses.indexOf(value);
    return idx !== -1;
  }

}