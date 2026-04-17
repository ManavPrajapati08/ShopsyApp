import * as React from "react";
import { cn } from "@/lib/utils";
import { Input as InputShadcn } from "@/shared/components/shadcn/input";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <InputShadcn
        type={type}
        className={cn(
          "focus-visible:ring-primary transition-all duration-200 h-12",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
