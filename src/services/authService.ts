// src/services/authService.ts

import api from "../api";
import type { LoginRequest, TokenResponse } from "../types/auth";

export const login = async (
  credentials: LoginRequest
): Promise<TokenResponse> => {
  const response = await api.post<TokenResponse>("/auth/login", credentials);
  return response.data;
};
