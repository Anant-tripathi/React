import "./App.css";
import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    // setCount(count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  }
  // the count is evaluated and render time so multiple calls to
  // the same function in same click will only increase count by 1.

  // the count when updated using an arrow function syntax will be
  // updated the instant the call is made to the function and the changes will
  // stay.

  function handleSub() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div className="App">
      <div className="box">
        <p>{count}</p>
        <button onClick={handleAdd} className="add">
          ADD
        </button>
        <button onClick={handleSub} className="sub">
          SUB
        </button>
        <button onClick={handleReset} className="reset">
          RESET
        </button>
      </div>
    </div>
  );
}
