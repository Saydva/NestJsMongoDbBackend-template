import { HttpException, Injectable, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schemas/user.schema'; // Import the User schema
import { createUserDto } from './dto/CreateUser.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';

@Injectable()
export class UserService {
  // This service handles user-related operations
  // such as creating, retrieving, updating, and deleting users.
  constructor(
    @InjectModel(User.name) private userModel: Model<User>, // Inject the User model
  ) {}

  createUser(createUserDto: createUserDto) {
    const newUser = new this.userModel(createUserDto); // Create a new user instance
    return newUser.save(); // Save the user to the database
  }

  getUsers() {
    return this.userModel.find(); // Retrieve all users from the database
  }

  getUserById(id: string) {
    return this.userModel.findById(id); // Retrieve a user by ID from the database
  }

  updateUser(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true, // Update a user by ID in the database
      runValidators: true, // Return the updated user
    }); // Return the updated user data
  }

  deteteUser(id: string) {
    return this.userModel.findByIdAndDelete(id); // Delete a user by ID from the database
  }
}
