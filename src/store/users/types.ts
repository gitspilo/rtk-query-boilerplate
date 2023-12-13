export type User = {
  email: string;
  id: string;
  name: {
    firstname: string | null;
    lastname: string | null;
  };
  username: string | null;
  password: string | null;
  phone: string | null;
  address: {
    city: string | null;
    geolocation: {
      long: string | null;
      lat: string | null;
    };
    number: number | null;
    street: string | null;
    zipcode: string | null;
  };
};

export interface UserType {
  username: string;
  password: string;
  token: string;
}

export enum UserRole {
  Admin = 'admin',
  Manager = 'manager',
  Designer = 'designer',
  Reviewer = 'reviewer'
}

export type UserState = {
  users: User[] | [];
  accessToken: string | null;
  refreshToken: string | null;
  user: UserType | null;
};
