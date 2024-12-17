import { Module } from '@nestjs/common';
import { FirebaseService } from './firebase/firebase.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';
import { initializeFirebaseClient } from './firebase/firebase.config';

@Module({
  providers: [
    FirebaseService,
    AuthService,
    {
      provide: 'FIREBASE_CLIENT',
      useFactory: (configService: ConfigService) =>
        initializeFirebaseClient(configService),
      inject: [ConfigService],
    },
  ],
  controllers: [AuthController],
  exports: [FirebaseService],
})
export class AuthModule {}
