import * as React from "react";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/atoms/form";
import Input from "@/shared/components/atoms/input";
import { cn } from "@/lib/utils";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <FormItem className={cn("space-y-2", className)}>
        <FormLabel className="text-sm font-semibold tracking-tight">
          {label}
        </FormLabel>
        <FormControl>
          <Input
            ref={ref}
            className={cn(
              error && "border-destructive focus-visible:ring-destructive",
            )}
            {...props}
          />
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
