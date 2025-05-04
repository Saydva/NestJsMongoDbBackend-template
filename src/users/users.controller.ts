import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service'; // Adjust the path as needed
import { createUserDto } from './dto/CreateUser.dto';
import mongoose from 'mongoose';
import { UpdateUserDto } from './dto/UpdateUser.dto';

@Controller('/users') // Define the base route for this controller
// This controller handles user-related routes
export class UsersController {
  constructor(private readonly userService: UserService) {}
  @Post()
  @UsePipes(new ValidationPipe()) // Use validation pipe for incoming requests
  // This method handles POST requests to create a new user
  createUser(@Body() createUserDto: createUserDto) {
    // Replace 'any' with the actual DTO type
    // Logic to create a user will go here
    console.log('created user', createUserDto.username); // Log the created user data
    return this.userService.createUser(createUserDto); // Call the service to create a user
    // Return the created user data
  }

  @Get()
  getUsers() {
    // Logic to retrieve all users will go here
    return this.userService.getUsers(); // Call the service to get all users
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) {
      throw new HttpException('Invalid ID format', 400); // Return a message if the ID is not valid
    }
    // Check if the provided ID is valid
    // Logic to validate the ID will go here
    // You can use a library like mongoose to validate the ID format
    // For example, you can use mongoose.Types.ObjectId.isValid(id) to check if the ID is valid
    // If the ID is not valid, you can throw an exception or return an error response
    // Logic to handle the case when the ID is not valid will go here
    // Logic to retrieve a user by ID will go here
    const findedUser = await this.userService.getUserById(id); // Call the service to get a user by ID
    if (!findedUser) {
      throw new HttpException('User not found', 404); // Return a message if the user is not found
    }
    return findedUser; // Return the found user data
  }
  // Return the user data

  @Patch(':id')
  @UsePipes(new ValidationPipe()) // Use validation pipe for incoming requests
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    // Replace 'any' with the actual DTO type
    // Logic to validate the ID will go here
    // Check if the provided ID is valid
    // You can use a library like mongoose to validate the ID format
    const isValid = mongoose.Types.ObjectId.isValid(id);
    // For example, you can use mongoose.Types.ObjectId.isValid(id) to check if the ID is valid
    // If the ID is not valid, you can throw an exception or return an error response
    // Logic to handle the case when the ID is not valid will go here
    // Logic to retrieve a user by ID will go here
    if (!isValid) {
      throw new HttpException('Invalid ID format', 400); // Return a message if the ID is not valid
    }
    const updatedUser = await this.userService.updateUser(id, updateUserDto); // Call the service to update a user by ID
    if (!updatedUser) {
      throw new HttpException('User not found', 404); // Return a message if the user is not found
    }
    return updatedUser; // Return the updated user data
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) {
      throw new HttpException('Invalid ID format', 400); // Return a message if the ID is not valid
    }
    const deletedUser = await this.userService.deteteUser(id); // Call the service to delete a user by ID
    if (!deletedUser) {
      throw new HttpException('User not found', 404); // Return a message if the user is not found
    }
    return deletedUser; // Return the deleted user data
  }
}

// You can add more methods for other user-related operations (e.g., update, delete) as needed
// For example, you might want to add methods for updating or deleting users
