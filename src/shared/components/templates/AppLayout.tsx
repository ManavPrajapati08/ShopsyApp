import * as React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/shared/components/organisms/Header";

const AppLayout: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-background selection:bg-primary/10">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-primary/5 blur-[120px] transition-all duration-1000" />
        <div className="absolute top-[20%] -right-[10%] h-[50%] w-[50%] rounded-full bg-secondary/5 blur-[120px] transition-all duration-1000" />
      </div>

      <Header />
      
      <main className="flex-1 flex flex-col pt-4">
        <Outlet />
      </main>

      <footer className="border-t py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2026 Shopsy. All rights reserved. Premium E-commerce Experience.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground font-medium">
              <a href="#" className="hover:text-primary transition-all duration-200">Privacy</a>
              <a href="#" className="hover:text-primary transition-all duration-200">Terms</a>
              <a href="#" className="hover:text-primary transition-all duration-200">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
