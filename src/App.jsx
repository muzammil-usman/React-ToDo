import { createContext, useState, useEffect } from "react";
import "./App.css";
import MyRoutes from "./Routing/MyRoutes";

export const ThemeChanger = createContext();

function App() {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  return (
    <>
      <ThemeChanger.Provider value={{ modeRn: mode, setMode: setMode }}>
        <MyRoutes />
      </ThemeChanger.Provider>
    </>
  );
}

export default App;
