import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService {
  constructor(private configService: ConfigService) {
    const firebaseConfigPath =
      this.configService.get<string>('FIREBASE_CONFIG');
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(require(firebaseConfigPath)),
      });
    }
  }

  async verifyToken(token: string): Promise<admin.auth.DecodedIdToken> {
    try {
      return await admin.auth().verifyIdToken(token);
    } catch (error) {
      throw new Error('Invalid Firebase Token');
    }
  }
}
