"use client";

import { useState } from "react";
import { v4 as uid } from "uuid";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const submitAction = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: uid(), value: inputValue }]);
    setInputValue("");
  };

  const markAsDone = (itemId) => {
    setTimeout(() => {
      setTodos(todos.filter(({ id, _value }) => id !== itemId));
    }, 500);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-4">TODO APP</h1>
      <div className="flex flex-col w-80">
        <form noValidate onSubmit={submitAction}>
          <input
            type="text"
            placeholder="What needs to be done?"
            className="input input-bordered input-primary w-full max-w-xs"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
        <ul className="mt-4">
          {todos.map((todo) => (
            <li key={todo.id} className="form-control">
              <label className="label justify-start space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={() => markAsDone(todo.id)}
                />
                <span className="label-text">{todo.value} </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
