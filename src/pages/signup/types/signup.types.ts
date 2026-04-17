import type { User } from "@/shared/types/user.types";

export interface SignupRequest {
  email: string;
  password: string;
  name: string;
}

export interface SignupResponse {
  user: User;
  message: string;
}
