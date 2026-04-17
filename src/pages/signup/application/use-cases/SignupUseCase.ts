import type { IAuthRepository } from "../../../login/interfaces/IAuthRepository";
import type { IToasterService } from "@/shared/interfaces/IToasterService";
import type { SignupRequest, SignupResponse } from "@/pages/signup/types/signup.types";

export class SignupUseCase {
  private readonly authRepository: IAuthRepository;
  private readonly toasterService: IToasterService;

  constructor(
    authRepository: IAuthRepository,
    toasterService: IToasterService
  ) {
    this.authRepository = authRepository;
    this.toasterService = toasterService;
  }

  async execute(request: SignupRequest): Promise<SignupResponse> {
    try {
      const response = await this.authRepository.register(request);
      this.toasterService.success(response.message);
      return response;
    } catch (error: any) {
      let errorMessage = "Registration failed. Please try again.";
      
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "This email is already registered. Please use a different email or login.";
      } else if (error.message) {
        errorMessage = error.message;
      }

      this.toasterService.error(errorMessage);
      throw error;
    }
  }
}
