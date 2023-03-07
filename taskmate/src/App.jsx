import "./App.css";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

export default function App() {
  const info = "Random";
  return (
    <div className="App">
      <Header></Header>
      <TaskList info={info} />
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
