import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
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

    @IsString({
        message: 'Please provide a valid username'
    })
    username: string;
}