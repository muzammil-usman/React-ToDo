import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <>
      <ul className="w-full h-10 flex justify-center items-center gap-20 list-none">
        <Link to="/">
          <li>Todo </li>
        </Link>
        <Link to="/dataRendering">
          <li>Data Rendering using API </li>
        </Link>
      </ul>
    </>
  );
}

export default Navbar;
