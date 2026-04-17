import type { LoginRequest, LoginResponse } from "../types/login.types";
import type { SignupRequest, SignupResponse } from "../../signup/types/signup.types";

export interface IAuthRepository {
  login(request: LoginRequest): Promise<LoginResponse>;
  register(request: SignupRequest): Promise<SignupResponse>;
  logout(): Promise<void>;
}
