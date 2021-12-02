import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Arosh',
      username: 'arosh.segar',
      password: 'arosh123',
    },
    {
      id: 2,
      name: 'Segar',
      username: 'joel.segar',
      password: 'joel23',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
