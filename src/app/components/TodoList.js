"use client";
import React from "react";
import { TodoItem } from "./TodoItem";
const TodoList = () => {
  return (
    <>
      <div className="max-w-[960px] flex justify-center items-center flex-col  mx-auto min-h-[50px] rounded-lg p-4 bg-zinc-500">
        <TodoItem/>
      </div>
    </>
  );
};

export default TodoList;
