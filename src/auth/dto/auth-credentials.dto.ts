import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class AuthCredentiasls{
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 
  {message: 'Passwords will contain at least 1 upper case letter, lower case letter and number or special character'}
  )
  password: string;
}