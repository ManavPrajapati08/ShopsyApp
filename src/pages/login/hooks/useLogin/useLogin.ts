import { useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { setUser, setLoading, setError } from "@/store/slices/authSlice";
import { authRepository } from "../../repositories/AuthRepositoryImpl";
import { toasterService } from "@/shared/services/SonnerToasterService";
import { LoginUseCase } from "../../application/use-cases/LoginUseCase";
import { LoginWithGoogleUseCase } from "../../application/use-cases/LoginWithGoogleUseCase";
import type { LoginRequest } from "../../types/login.types";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginUseCase = new LoginUseCase(authRepository, toasterService);
  const googleLoginUseCase = new LoginWithGoogleUseCase(authRepository, toasterService);

  const login = async (request: LoginRequest) => {
    setIsSubmitting(true);
    dispatch(setLoading(true));
    try {
      const response = await loginUseCase.execute(request);
      dispatch(setUser(response.user));
      navigate("/");
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
    login,
    loginWithGoogle,
    isSubmitting,
  };
};
