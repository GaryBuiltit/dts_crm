import "./output.css";
import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";
import { createContext } from "react";

export const userContext = createContext();

function App(user) {
  return (
    <div className="h-screen bg-gray-200">
      <userContext.Provider value={user}>
        <Navbar />
        <Outlet />
      </userContext.Provider>
    </div>
  );
}

export default App;
