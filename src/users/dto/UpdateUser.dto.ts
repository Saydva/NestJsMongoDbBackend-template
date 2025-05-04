import { IsOptional, IsString } from "class-validator";

export class UpdateUserDto {
@IsOptional()
@IsString()
email?: string; // Optional field for email
@IsOptional()
@IsString()
displayName?: string; // Optional field for display name
}