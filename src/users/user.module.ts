import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "../schemas/user.schema";
import { UserService } from "./user.service";
import { UsersController } from "./users.controller";

@Module({
    imports: [
        MongooseModule.forFeature([
        { name: User.name, schema: UserSchema },
        ]),
    ],
    controllers: [UsersController],
    providers: [UserService],
    exports: [MongooseModule],
    })
export class UserModule {}
// This module imports the MongooseModule and registers the User schema with it.