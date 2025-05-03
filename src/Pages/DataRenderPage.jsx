import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Fetch from "../Components/Fetch/Fetch";
import ThemeWrapper from "../Components/ThemeWrapper";

function DataRenderPage() {
  return (
    <>
      <ThemeWrapper>
        <Navbar />
        <Fetch />
      </ThemeWrapper>
    </>
  );
}

export default DataRenderPage;
