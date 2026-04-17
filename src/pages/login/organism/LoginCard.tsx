import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/atoms/cards";
import { Form, FormField } from "@/shared/components/atoms/form";
import Button from "@/shared/components/atoms/button";
import TextField from "../molecules/TextField";
import Typography from "@/shared/components/atoms/Typography";
import { useLogin } from "../hooks/useLogin/useLogin";
import { Link } from "react-router-dom";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginCard = () => {
  const { login, isSubmitting } = useLogin();
  
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    await login(values);
  };

  return (
    <Card className="w-full max-w-md border-border/40 bg-background/60 backdrop-blur-xl shadow-2xl animate-in fade-in zoom-in-95 duration-500">
      <CardHeader className="space-y-1">
        <CardTitle className="text-3xl font-bold tracking-tight text-center">
          Login
        </CardTitle>
        <CardDescription className="text-center text-muted-foreground">
          Enter your email and password to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <TextField
                  label="Email"
                  placeholder="name@example.com"
                  type="email"
                  disabled={isSubmitting}
                  error={form.formState.errors.email?.message}
                  {...field}
                />
              )}
            />
            <div className="space-y-1">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <TextField
                    label="Password"
                    placeholder="••••••••"
                    type="password"
                    disabled={isSubmitting}
                    error={form.formState.errors.password?.message}
                    {...field}
                  />
                )}
              />
              <div className="flex justify-end">
                <Button variant="link" size="sm" className="px-0 font-medium text-xs text-primary hover:text-primary/80">
                  Forgot password?
                </Button>
              </div>
            </div>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full font-bold h-11 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <Typography variant="muted" className="text-center w-full text-xs">
          Don't have an account?{" "}
          <Link to="/signup">
            <Button variant="link" className="p-0 h-auto font-bold text-primary">
              Sign up
            </Button>
          </Link>
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default LoginCard;
