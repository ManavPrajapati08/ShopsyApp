import { Outlet } from "react-router-dom";
import { useInitializeAuth } from "./hooks/useInitializeAuth";
import "./App.css";

function App() {
  useInitializeAuth();

  return (
    <div className="min-h-screen bg-background font-sans antialiased text-foreground">
      <Outlet />
    </div>
  );
}

export default App;
