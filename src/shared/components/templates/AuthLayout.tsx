import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import ThemeToggle from "@/shared/components/molecules/ThemeToggle";
import Typography from "@/shared/components/atoms/Typography";
import { ShoppingBag } from "lucide-react";

const AuthLayout: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-background selection:bg-primary/10">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] h-[50%] w-[50%] rounded-full bg-secondary/5 blur-[120px]" />
      </div>

      <header className="w-full">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <Typography variant="logo" as="span">
              Shopsy
            </Typography>
          </Link>

          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <Outlet />
      </main>

      {/* Minimal Footer */}
      <footer className="py-8 text-center">
        <Typography variant="muted" className="text-xs">
          © 2026 Shopsy. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
};

export default AuthLayout;
