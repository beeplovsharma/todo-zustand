import Link from "next/link";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <>
      <div className="text-[#ffffffe8] max-w-[1000px] mx-auto p-4 min-h-screen bg-black">
        <h1 className="font-['tomato_grotesk'] text-center text-5xl font-bold my-2">
          todo list
        </h1>
        <div className="flex justify-between items-center">
          <Link
            href="/addtask"
            className="bg-zinc-600 px-4 py-2 my-4 text-lg font-bold rounded-md"
          >
            Add Task
          </Link>
        </div>
        <div>
          <TodoList />
        </div>
      </div>
    </>
  );
}
