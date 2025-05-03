import { React, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeChanger } from "../../App";

function Navbar() {
  const { modeRn, setMode } = useContext(ThemeChanger);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="sm:hidden flex justify-end px-4 mt-4 max-w-4xl mx-auto">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-800 dark:text-gray-100 text-2xl"
        >
          ☰
        </button>
      </div>
      {menuOpen && (
        <ul
          className="flex flex-col gap-4 list-none shadow-sm bg-white/30 dark:bg-gray-800/30 
          backdrop-blur-md rounded-xl mx-auto mt-2 max-w-4xl px-4 py-4 sm:hidden text-center"
        >
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              ToDo
            </Link>
          </li>
          <li>
            <Link to="/dataRendering" onClick={() => setMenuOpen(false)}>
              Data Rendering
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                setMode(modeRn === "light" ? "dark" : "light");
                setMenuOpen(false);
              }}
              className="hover:cursor-pointer"
            >
              {modeRn === "light" ? "dark mode" : "light mode"}
            </button>
          </li>
        </ul>
      )}
      <ul
        className="hidden sm:flex w-full h-10 justify-center items-center gap-20 list-none 
        shadow-sm bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-xl 
        mx-auto mt-4 max-w-4xl px-4"
      >
        <li>
          <Link to="/">ToDo</Link>
        </li>
        <li>
          <Link to="/dataRendering">Data Rendering</Link>
        </li>
        <li>
          <button
            onClick={() => {
              setMode(modeRn === "light" ? "dark" : "light");
            }}
            className="hover:cursor-pointer"
          >
            {modeRn === "light" ? "dark mode" : "light mode"}
          </button>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
