import type { IAuthRepository } from "../../interfaces/IAuthRepository";
import type { IToasterService } from "@/shared/interfaces/IToasterService";
import type { LoginRequest, LoginResponse } from "../../types/login.types";

export class LoginUseCase {
  private readonly authRepository: IAuthRepository;
  private readonly toasterService: IToasterService;

  constructor(
    authRepository: IAuthRepository,
    toasterService: IToasterService
  ) {
    this.authRepository = authRepository;
    this.toasterService = toasterService;
  }

  async execute(request: LoginRequest): Promise<LoginResponse> {
    try {
      const response = await this.authRepository.login(request);
      this.toasterService.success(response.message);
      return response;
    } catch (error: any) {
      const errorMessage = error.message || "Login failed. Please try again.";
      this.toasterService.error(errorMessage);
      throw error;
    }
  }
}
