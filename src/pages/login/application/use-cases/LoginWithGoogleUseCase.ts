import type { IAuthRepository } from "../../interfaces/IAuthRepository";
import type { IToasterService } from "@/shared/interfaces/IToasterService";
import type { LoginResponse } from "../../types/login.types";

export class LoginWithGoogleUseCase {
  private readonly authRepository: IAuthRepository;
  private readonly toasterService: IToasterService;

  constructor(
    authRepository: IAuthRepository,
    toasterService: IToasterService
  ) {
    this.authRepository = authRepository;
    this.toasterService = toasterService;
  }

  async execute(): Promise<LoginResponse> {
    try {
      const response = await this.authRepository.loginWithGoogle();
      this.toasterService.success(response.message);
      return response;
    } catch (error: any) {
      const errorMessage = error.message || "Google login failed. Please try again.";
      this.toasterService.error(errorMessage);
      throw error;
    }
  }
}
