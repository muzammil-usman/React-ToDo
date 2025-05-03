import { useContext } from "react";
import { ThemeChanger } from "../App";

function ThemeWrapper({ children }) {
  const { modeRn } = useContext(ThemeChanger);

  return (
    <div
      className={
        modeRn === "dark"
          ? "bg-black text-white h-screen border-white outline-white placeholder-white"
          : "bg-white text-black  h-screen border-black outline-black placeholder-black"
      }
    >
      {children}
    </div>
  );
}

export default ThemeWrapper;
