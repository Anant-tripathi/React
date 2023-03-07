import { useState } from "react";
import { TaskCard } from "./TaskCard.jsx";
import { BoxCard } from "./BoxCard.jsx";
export const TaskList = ({ info }) => {
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
    <>
      <h1>Task List</h1>
      <ul>
        <button className="trigger" onClick={() => setShow(!show)}>
          Toggle
        </button>
        {show &&
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              info={info}
              task={task}
              handleDelete={handleDelete}
            />
          ))}
      </ul>
      <BoxCard result="success">
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          non!
        </p>
      </BoxCard>
      <BoxCard result="warning">
        <p className="title">Lorem ipsum dolor sit.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          reiciendis ipsam voluptatum necessitatibus reprehenderit eum eos
          mollitia quas, quasi recusandae! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Laudantium, nobis!
        </p>
      </BoxCard>
    </>
  );
};
