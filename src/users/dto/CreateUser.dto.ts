import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class createUserDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsOptional()
    @IsEmail()
    @IsNotEmpty()    
    email: string;

    @IsOptional()
    @IsString()
    displayName: string;
}