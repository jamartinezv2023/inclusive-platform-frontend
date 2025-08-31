// src/types/auth.ts

export type LoginRequest = {
  email: string;
  password: string;
};

export type TokenResponse = {
  token: string;
};
