import { toast } from "sonner";
import type { IToasterService } from "../interfaces/IToasterService";

export class SonnerToasterService implements IToasterService {
  success(message: string): void {
    toast.success(message);
  }

  error(message: string): void {
    toast.error(message);
  }

  info(message: string): void {
    toast.info(message);
  }

  warning(message: string): void {
    toast.warning(message);
  }
}

export const toasterService = new SonnerToasterService();
