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
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: SignupFormValues) => {
    console.log("Signup Values:", values);
    // Handle signup logic here
  };

  return (
    <Card className="w-full max-w-md border-border/40 bg-background/60 backdrop-blur-xl shadow-2xl animate-in fade-in zoom-in-95 duration-500">
      <CardHeader className="space-y-1">
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
                  error={form.formState.errors.confirmPassword?.message}
                  {...field}
                />
              )}
            />
            <Button type="submit" className="w-full font-bold h-11 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
              Create Account
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <Typography variant="muted" className="text-center w-full text-xs">
          Already have an account?{" "}
          <Button variant="link" className="p-0 h-auto font-bold text-primary">
            Login
          </Button>
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default SignupCard;
