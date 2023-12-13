import { UserRole } from "store/users/types";

export enum Maptype {
  Roadmap = 'roadmap',
  satellite = 'satellite',
  terrain = 'terrain',
  Hybrid = 'hybrid'
}

export type Response<T> = {
  data: T;
  status: boolean;
  message?: string;
};

export type PostResponse = {
  status: boolean;
  message: string;
};

export type Error = {
  message: string;
};

export type JWT = {
  iat: number;
  nbf: number;
  jti: string;
  exp: number;
  identity: string;
  fresh: boolean;
  type: string;
  user_claims: { role: UserRole; IsActive: boolean };
};

export interface IconProps {
  color?: string;
  height?: number;
  width?: number;
  onClick?: () => void;
}

export interface OptionsTypeNumber {
  label: string;
  value: number;
}

export interface OptionsTypes {
  label: string | null;
  value: string | null;
}
