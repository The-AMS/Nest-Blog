import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { FirebaseService } from './firebase/firebase.service';

@Module({
  providers: [FirebaseService, AuthService],
  controllers: [AuthController],
  exports: [FirebaseService],
})
export class AuthModule {}
