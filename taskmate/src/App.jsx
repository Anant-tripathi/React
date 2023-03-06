import "./App.css";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Learn Javascript", completed: true },
    { id: 2, name: "Learn React", completed: false },
    { id: 3, name: "Learn Express", completed: false },
  ]);

  const [show, setShow] = useState(false);

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="App">
      <h1>Task List</h1>
      <ul>
        <button className="trigger" onClick={() => setShow(!show)}>
          Toggle
        </button>
        {show &&
          tasks.map((task) => (
            <li
              key={task.id}
              className={task.completed ? "completed" : "incomplete"}
            >
              <span>
                {task.id} - {task.name}
              </span>
              <button onClick={() => handleDelete(task.id)} className="delete">
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

//conditional templates -> following is used to create a toggle show/hide 
//button which sets reverse of initial state of a hook. 
        // <button className="trigger" onClick={() => setShow(!show)}>
        //   Toggle
        // </button>
//
// Hooks => Hooks are functions that let you “hook into” React state and
// lifecycle features from function components. Hooks don’t work inside classes
// — they let you use React without classes. Example- useState is a hook which 
// allows you to use states without classes.
// Two rules for using hooks:
// 1. only call hooks at top level.
// 2. only call hooks from react functions.
