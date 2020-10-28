import { TaskStatus } from './taskStatus.enum';
import { BadRequestException, PipeTransform } from "@nestjs/common";

export class ValidateTaskStatusPipe implements PipeTransform{
  readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE
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