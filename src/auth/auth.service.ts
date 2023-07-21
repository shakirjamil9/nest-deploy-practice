import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(username: string, password: string): Promise<any> {
    // const user = this.usersService.findOne(username);
    // if (user && user.password == password) {
    //   return user;
    // }
  }
}
