import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import TodoList from "../Components/TodoList/TodoList";

function HomePage() {
  return (
    <>
      <Navbar />
      <TodoList />
    </>
  );
}

export default HomePage;
