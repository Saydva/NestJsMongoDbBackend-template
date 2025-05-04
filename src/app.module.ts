import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/user.module';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRootAsync({
    useFactory: async () => {
      return {
        uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase',
      };
    },
  }), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

