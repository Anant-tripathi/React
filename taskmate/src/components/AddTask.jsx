import { useState, useRef } from "react";
import "./AddTask.css";

export const AddTask = ({ tasks, setTasks }) => {
  // const [taskValue, setTaskValue] = useState("");
  const taskRef = useRef("");
  const [progress, setProgress] = useState(false);

  // const handleChange = (event) => {
  //   console.log(taskRef.current.value);
  // };
  const handleReset = () => {
    taskRef.current.value = "";
    // setTaskValue("");
    setProgress(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const task = {
      id: Math.floor(Math.random() * 10000),
      name: "abc",
      completed: Boolean(progress),
    };
    setTasks([...tasks, task]);
    handleReset();
    //console.log(task);
  };

  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="">Task Name:</label> */}
        <input
          // onChange={handleChange}
          type="text"
          name="task"
          id="task"
          placeholder="Task Name"
          autoComplete="off"
          //value={taskValue} //to manipulate the value in the box
          ref={taskRef}
        />
        <select
          onChange={(event) => setProgress(event.target.value)}
          value={progress}
        >
          <option value={false}>Pending</option>
          <option value={true}>Completed</option>
        </select>
        <span onClick={handleReset} className="reset">
          Reset
        </span>
        <button type="submit">Add Task</button>
      </form>
      <p>{taskRef.current.value}</p>
    </section>
  );
};
