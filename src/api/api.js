// import { useEffect, useState } from "react";

// export default function App() {
//   const [task, setTask] = useState(() => {
//     try {
//       const saved = localStorage.getItem("list");
//       return saved ? JSON.parse(saved) : [];
//     } catch (e) {
//       console.error(e);
//       return [];
//     }
//   });
//   const [newTask, setNewTask] = useState("");

//   const [search, setSearch] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     localStorage.setItem("list", JSON.stringify(task));
//   }, [task]);

//   const handleInput = (e) => {
//     setNewTask(e.target.value);
//   };

//   const addTask = () => {
//     if (newTask.trim() !== "") {
//       setTask((t) => [...t, newTask]);
//       setNewTask("");
//     }
//   };

//   const deleteTask = (id) => {
//     const updatedTask = task.filter((_, i) => i !== id);
//     setTask(updatedTask);
//   };

//   const searchInput = (e) => {
//     setSearch(e.target.value);
//   };

//   const Query = () => {
//     setSearchQuery(search);
//     setSearch("");
//   };

//   return (
//     <>
//       <input
//         type="text"
//         value={search}
//         onChange={searchInput}
//         placeholder="Search Task"
//       />
//       <button type="button" onClick={Query}>
//         Search
//       </button>

//       <form className="grid gap-2 place-content-center mt-5">
//         <input
//           onChange={handleInput}
//           value={newTask}
//           type="text"
//           className="border-1"
//           placeholder="Enter Task"
//         />
//         <button
//           type="button"
//           onClick={addTask}
//           className="bg-red-500 p-2 text-white"
//         >
//           Add Task
//         </button>
//       </form>

//       <ul>
//         {task
//           .map((item, index) => ({ item, index })) // keep original index
//           .filter(({ item }) =>
//             item.toLowerCase().includes(searchQuery.toLowerCase())
//           )
//           .map(({ item, index }) => (
//             <li key={index}>
//               <span>{item}</span>
//               <button onClick={() => deleteTask(index)}>Delete</button>
//             </li>
//           ))}
//       </ul>
//     </>
//   );
// }
