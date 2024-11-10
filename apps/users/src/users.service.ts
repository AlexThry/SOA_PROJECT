import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: Record<string, any>[] = [
    {
      "username": "example",
      "email": "example@ex.com",
      "password": "pass",
      "age": 32
    },
    {
      "username": "example2",
      "email": "example2@ex.com",
      "password": "pass",
      "age": 45
    },
  ]
  

  findAll() {
    return this.users
  }
}
