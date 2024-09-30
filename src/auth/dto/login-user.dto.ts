import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class LoginUserDto {
    @IsEmail(
        {},
        {
            message: 'Please provide a valid email'
        }
    )
    email: string;

    @IsNotEmpty()
    @MinLength(8, {
        message: 'Password must be at least 8 characters long'
    })
    password: string;
}