import { create } from "zustand";
import {persist} from 'zustand/middleware'

export const useTodosStore = create(
  persist((set) => ({
    tasks: [],
    addTask: (newTask) => {
      set((state) => ({
        tasks: [...state.tasks, newTask],
      }));
    },
    editTask: (id, updatedTask) => {
      set((state) => {
        const updatedTasks = state.tasks.map((task) => {
          if (task.id === id) {
            return { ...task, ...updatedTask };
          }
          return task;
        });
        return { tasks: updatedTasks };
      });
    },
    deleteTask: (id) => {
      set((state) => {
        const updatedTasks = state.tasks.filter((task) => task.id !== id);
        return { tasks: updatedTasks };
      });
    },
    completeTask :(id,isComplete)=>{
      set((state)=>{
        const reqTask = state.tasks.map((task) => {
          if(task.id === id){
            return {...task,completed:isComplete};
          }
          return task;
        })
        return {tasks:reqTask};
      })
    }
  }),{name:"todos"})
);

// export const useTodosStore = create((set) => ({
//   tasks: [
//     {
//       id: 1,
//       title: "WebDev",
//       description: "Learning Zustand",
//       completed: false,
//     },
//     {
//       id: 2,
//       title: "React",
//       description: "Learning React",
//       completed: true,
//     },
//     {
//       id: 3,
//       title: "Redux",
//       description: "Learning Redux",
//       completed: false,
//     },
//     {
//       id: 4,
//       title: "Next JS",
//       description: "Learning Next",
//       completed: false,
//     },
//     {
//       id: 5,
//       title: "Zustand",
//       description: "Learning Zustand",
//       completed: true,
//     },
//   ],
//   addTask: (newTask) => {
//     set((state) => ({
//       tasks: [...state.tasks, newTask],
//     }));
//   },
//   editTask: (id, updatedTask) => {
//     set((state) => {
//       const updatedTasks = state.tasks.map((task) => {
//         if (task.id === id) {
//           return { ...task, ...updatedTask };
//         }
//         return task;
//       });
//       return { tasks: updatedTasks };
//     });
//   },
//   deleteTask: (id) => {
//       set((state) => {
//         const updatedTasks = state.tasks.filter((task) => task.id !== id);
//         return { tasks: updatedTasks };
//       });
//   },
// }));
