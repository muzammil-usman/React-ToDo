import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import TodoList from "../Components/TodoList/TodoList";
import ThemeWrapper from "../Components/ThemeWrapper";

function HomePage() {
  return (
    <>
      <ThemeWrapper>
        <Navbar />
        <TodoList />
      </ThemeWrapper>
    </>
  );
}

export default HomePage;
