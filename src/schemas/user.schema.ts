import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: false })
  email?: string;

  @Prop({ required: true })
  displayName: string;
}
export const UserSchema = SchemaFactory.createForClass(User);