"use client";
import Link from "next/link";
import { useTodosStore } from "../store/Todos";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoReturnDownBackOutline } from "react-icons/io5";

function Page() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const { addTask } = useTodosStore();

  const handleAddTask = () => {
    if (!title && !description) return;

    const newPost = {
      id: Date.now(),
      title,
      description,
      completed,
    };

    addTask(newPost);
    setTitle("");
    setDescription("");

    router.push("/");
  };
  return (
    <>
      <div className="max-w-[1000px] text-white h-screen  mx-auto flex flex-col justify-center">
        <div className="flex gap-4 justify-center items-center">
          <h1 className="font-['tomato_grotesk'] font-bold text-6xl text-center my-6">
            add task
          </h1>

          <Link href="/" className="bg-zinc-600 mt-3 p-2 rounded-xl">
            <IoReturnDownBackOutline />
          </Link>
        </div>
        <div className="flex gap-6 flex-col justify-center max-w-[600px] mx-auto">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-zinc-600 p-4 rounded-xl "
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-zinc-600 p-4 rounded-xl "
          />
          {/* <div className="flex gap-4 justify-center items-center">
            <span className='font-["tomato_grotesk"] text-3xl'>completed</span>
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
              className="w-6 h-6"
            />
          </div> */}

          <button
            onClick={() => handleAddTask()}
            className="bg-zinc-600 p-4 rounded-xl my-3"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default Page;
