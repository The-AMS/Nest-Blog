import { Injectable, UnauthorizedException } from '@nestjs/common';
import { FirebaseService } from './firebase/firebase.service';

@Injectable()
export class AuthService {
  constructor(private firebaseService: FirebaseService) {}

  async validateUser(token: string): Promise<any> {
    try {
      const user = await this.firebaseService.verifyToken(token);
      return user;
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
