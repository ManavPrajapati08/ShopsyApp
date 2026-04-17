import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import "./index.css";
import App from "./App.tsx";
import HomePage from "@/pages/home";
import LoginPage from "@/pages/login";
import SignupPage from "@/pages/signup";
import AppLayout from "@/shared/components/templates/AppLayout";
import AuthLayout from "@/shared/components/templates/AuthLayout";
import { ThemeProvider } from "@/shared/provider/ThemeProvider.tsx";
import { store } from "./store";
import ProtectedRoute from "@/shared/components/guards/ProtectedRoute";
import PublicRoute from "@/shared/components/guards/PublicRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <AppLayout />,
            children: [
              {
                index: true,
                element: <HomePage />,
              },
            ],
          },
        ],
      },
      {
        element: <PublicRoute />,
        children: [
          {
            element: <AuthLayout />,
            children: [
              {
                path: "login",
                element: <LoginPage />,
              },
              {
                path: "signup",
                element: <SignupPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <RouterProvider router={router} />
        <Toaster position="top-center" richColors />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
