import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "../Pages/HomePage";
import DataRenderPage from "../Pages/DataRenderPage";
import Example from "../Pages/404PageNotFound";

function MyRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dataRendering" element={<DataRenderPage />} />
        <Route path="*" element={<Example />} />
      </Routes>
    </>
  );
}

export default MyRoutes;
