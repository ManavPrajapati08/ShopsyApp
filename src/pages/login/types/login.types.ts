import type { User } from "@/shared/types/user.types";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  message: string;
}
