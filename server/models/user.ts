import { User } from '~/types';

// Fake users data
const users: User[] = [
  {
    id: 'a692ef8f-a46f-4c26-b44b-cb46048e562d',
    email: 'admin@gmail.com',
    password: 'admin',
    roles: ['ADMIN'],
  },
  {
    id: '5c587e78-abe4-42b6-a464-4dfb20b81fee',
    email: 'user@gmail.com',
    password: 'user',
    roles: ['USER'],
  },
];

export async function getUsers() {
  return users;
}

export async function getUser(email: string, password: string) {
  return users.find(
    (user) => user.email === email && user.password === password
  );
}

export async function isAdmin(user?: User) {
  return user && user.roles.includes('ADMIN');
}
