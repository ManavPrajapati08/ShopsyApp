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
import { useSignup } from "../hooks/useSignup/useSignup";
import { Link } from "react-router-dom";

const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignupFormValues = z.infer<typeof signupSchema>;

const SignupCard = () => {
  const { signup, loginWithGoogle, isSubmitting } = useSignup();

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: SignupFormValues) => {
    await signup(values);
  };

  return (
    <Card className="w-full max-w-md border-border/40 bg-background/60 backdrop-blur-xl shadow-2xl animate-in fade-in zoom-in-95 duration-500">
      <CardHeader>
        <CardTitle className="text-3xl font-bold tracking-tight text-center">
          Create an account
        </CardTitle>
        <CardDescription className="text-center text-muted-foreground">
          Enter your details below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <TextField
                  label="Full Name"
                  placeholder="John Doe"
                  disabled={isSubmitting}
                  error={form.formState.errors.name?.message}
                  {...field}
                />
              )}
            />
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <TextField
                  label="Confirm Password"
                  placeholder="••••••••"
                  type="password"
                  disabled={isSubmitting}
                  error={form.formState.errors.confirmPassword?.message}
                  {...field}
                />
              )}
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full font-bold h-11 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              {isSubmitting ? "Creating account..." : "Create Account"}
            </Button>
          </form>
        </Form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background/0 px-2 text-muted-foreground backdrop-blur-sm">
              Or continue with
            </span>
          </div>
        </div>

        <Button
          variant="outline"
          type="button"
          disabled={isSubmitting}
          onClick={loginWithGoogle}
          className="w-full h-11 font-semibold border-border/40 bg-background/40 hover:bg-background/60 transition-all"
        >
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Google
        </Button>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <Typography variant="muted" className="text-center w-full text-xs">
          Already have an account?{" "}
          <Link to="/login">
            <Button variant="link" className="p-0 h-auto font-bold text-primary">
              Login
            </Button>
          </Link>
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default SignupCard;
