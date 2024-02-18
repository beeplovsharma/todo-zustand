"use client";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { useTodosStore } from "../store/Todos";

export const TodoItem = () => {
  const { tasks, editTask, deleteTask, completeTask } = useTodosStore();
  const [isEdit, setisEdit] = useState(false);
  const [newId, setNewId] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleComplete = (id) => {
    completeTask(id, completed);
  };

  const handleEdit = (id) => {
    const task = tasks.filter((t) => t.id === id)[0];
    setNewId(task.id);
    setNewTitle(task.title);
    setNewDescription(task.description);
  };

  const handleEditButton = () => {
    const editedTask = {
      id: newId,
      title: newTitle,
      description: newDescription,
      completed: false,
    };
    editTask(editedTask.id, editedTask);
    setNewTitle("");
    setNewDescription("");
    setisEdit(false);
  };

  const handleDeleteTask = (id) => {
    deleteTask(id);
  };
  return (
    <>
      {isEdit && (
        <div className="w-full flex sm:flex-col gap-2 h-full bg-zinc-700 p-6 rounded-md">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="p-3 rounded-xl text-black"
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="p-3 rounded-xl text-black"
          />
          <button
            onClick={() => handleEditButton()}
            className="p-3 bg-zinc-400 rounded-lg"
          >
            Edit
          </button>
        </div>
      )}
      <div className="flex flex-col w-full h-full gap-2 mt-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="w-full h-full bg-zinc-600 p-4 border-6 rounded-md flex justify-between"
          >
            <div id="left" className="flex gap-3 items-start">
              <input
                type="checkbox"
                onChange={() => setCompleted(!completed)}
                checked={task.completed}
                onClick={() => handleComplete(task.id)}
                className="mt-[4px]"
              />
              <div className="md:w-[200px]">
                <h1
                  style={{ opacity: task.completed && "30%" }}
                  className="font-bold"
                >
                  {task.title}
                </h1>
                <h3
                  style={{ opacity: task.completed && "30%" }}
                  className="break-words"
                >
                  {task.description}
                </h3>
              </div>
            </div>

            <div id="right" className="flex gap-3 items-center justify-center">
              <button className="hover:scale-105 duration-100">
                <MdDelete onClick={() => handleDeleteTask(task.id)} size={20} />
              </button>

              <button
                onClick={() => {
                  setisEdit(!isEdit);
                  handleEdit(task.id);
                }}
                className="hover:scale-105 duration-100"
              >
                <FaPencilAlt />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
