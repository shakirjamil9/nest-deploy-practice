import { Injectable } from '@nestjs/common';

export type User = {
  id: string;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 'asdf-2343sf-32r',
      name: 'shakir',
      username: 'shakir9',
      password: 'shakir',
    },
  ];
}
