import { User } from './user.entity';
import { createParamDecorator } from "@nestjs/common";

export const GetUser = createParamDecorator((data, req) :User => {
  // console.log(data, req)
  return req.user
});