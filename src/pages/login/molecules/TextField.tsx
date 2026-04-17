import * as React from "react";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/atoms/form";
import Input from "@/shared/components/atoms/input";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const isPassword = type === "password";

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <FormItem className={cn("space-y-2", className)}>
        <FormLabel className="text-sm font-semibold tracking-tight">
          {label}
        </FormLabel>
        <FormControl>
          <div className="relative group">
            <Input
              ref={ref}
              type={isPassword ? (showPassword ? "text" : "password") : type}
              className={cn(
                error && "border-destructive focus-visible:ring-destructive",
                isPassword && "pr-10"
              )}
              {...props}
            />
            {isPassword && (
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors focus:outline-none"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            )}
          </div>
        </FormControl>
        {error && (
          <FormMessage className="text-xs font-medium">{error}</FormMessage>
        )}
      </FormItem>
    );
  },
);

TextField.displayName = "TextField";

export default TextField;
