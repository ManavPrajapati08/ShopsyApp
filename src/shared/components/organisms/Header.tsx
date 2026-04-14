import Button from "@/shared/components/atoms/button";
import Typography from "@/shared/components/atoms/Typography";
import { ShoppingBag, Menu } from "lucide-react";
import ThemeToggle from "@/shared/components/molecules/ThemeToggle";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl transition-all duration-300">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
            <ShoppingBag className="h-6 w-6" />
          </div>
          <Typography variant="logo" as="span">
            Shopsy
          </Typography>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <div className="hidden sm:flex items-center gap-3">
            <Button
              asChild
              variant="ghost"
              className="font-semibold transition-all hover:bg-muted"
            >
              <Link to="/login">Login</Link>
            </Button>
            <Button
              asChild
              className="font-semibold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
            >
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden rounded-full"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
