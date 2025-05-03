import { useEffect, useState, useRef } from "react";
import "../TodoList/TodoList.css";

export default function TodoList() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const isInitialMount = useRef(true);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos && Array.isArray(savedTodos)) {
      setTodo(savedTodos);
    }
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      localStorage.setItem("todos", JSON.stringify(todo));
    }
  }, [todo]);

  const valueGetter = (e) => {
    setInput(e.target.value);
  };

  const onDelete = (id) => {
    const updatedTodos = todo.filter((item) => item.id !== id);
    setTodo(updatedTodos);
  };

  return (
    <div className="main w-full h-screen">
      <div className="mainCont w-10/12 flex items-center justify-center gap-12 flex-col">
        <h1 className="text-5xl overflow-y-hidden mt-16">To-Do List</h1>
        <div className="todoList min-h-96 h-auto w-200 flex gap-8 flex-col">
          <div className="adder flex items-center justify-center gap-6 mt-8">
            <input
              type="text"
              placeholder="note everything that's matters"
              autoFocus
              className="border-1 w-100 h-10 rounded-b-sm pl-4"
              value={input}
              onChange={valueGetter}
            />
            <button
              className="bg-green-500 rounded-b-sm w-20 h-10 transition hover:bg-green-400 hover:cursor-pointer"
              onClick={() => {
                if (input.length < 2) {
                  alert("2 se bari length rakh bhai");
                  return;
                }
                setTodo([
                  ...todo,
                  {
                    text: input,
                    id: Date.now(),
                  },
                ]);
                setInput("");
              }}
            >
              Add
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {todo.length < 1 ? (
              <div className="flex justify-center">
                <span className="p-2">No items to display</span>
              </div>
            ) : (
              todo.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-center items-center gap-4"
                >
                  <span>{item.text}</span>
                  <button className="bg-blue-500 text-white w-20 h-8 rounded-b-sm transition hover:bg-blue-400">
                    done
                  </button>
                  <button className="bg-green-500 w-20 h-8 rounded-b-sm transition hover:bg-green-400">
                    update
                  </button>
                  <button
                    className="bg-red-500 text-white w-20 h-8 rounded-b-sm transition hover:bg-red-400 hover:text-black"
                    onClick={() => onDelete(item.id)}
                  >
                    delete
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
