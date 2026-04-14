import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased text-foreground">
      <Outlet />
    </div>
  );
}

export default App;
