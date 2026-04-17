import { useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { setLoading, setError, setUser } from "@/store/slices/authSlice";
import { authRepository } from "@/pages/login/repositories/AuthRepositoryImpl";
import { toasterService } from "@/shared/services/SonnerToasterService";
import { SignupUseCase } from "../../application/use-cases/SignupUseCase";
import { LoginWithGoogleUseCase } from "@/pages/login/application/use-cases/LoginWithGoogleUseCase";
import type { SignupRequest } from "../../types/signup.types";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signupUseCase = new SignupUseCase(authRepository, toasterService);
  const googleLoginUseCase = new LoginWithGoogleUseCase(authRepository, toasterService);

  const signup = async (request: SignupRequest) => {
    setIsSubmitting(true);
    dispatch(setLoading(true));
    try {
      await signupUseCase.execute(request);
      navigate("/login");
    } catch (error: any) {
      dispatch(setError(error.message));
    } finally {
      setIsSubmitting(false);
      dispatch(setLoading(false));
    }
  };

  const loginWithGoogle = async () => {
    setIsSubmitting(true);
    dispatch(setLoading(true));
    try {
      const response = await googleLoginUseCase.execute();
      dispatch(setUser(response.user));
      navigate("/");
    } catch (error: any) {
      dispatch(setError(error.message));
    } finally {
      setIsSubmitting(false);
      dispatch(setLoading(false));
    }
  };

  return {
    signup,
    loginWithGoogle,
    isSubmitting,
  };
};
