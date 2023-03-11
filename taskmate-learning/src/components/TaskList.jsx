import { useState } from "react";
import { TaskCard } from "./TaskCard.jsx";
// import { BoxCard } from "./BoxCard.jsx";
import "./Header.css";
import "./TaskList.css";

export const TaskList = ({ tasks, setTasks }) => {
  const [show, setShow] = useState(true);

  // const styles = {
  //   color: show ? "#3D8361" : "#be3434",
  //   border: "2px solid",
  //   //using dynamic styling below
  //   borderColor: show ? "#3D8361" : "#be3434",
  //   padding: "20px",
  //   borderRadius: "5px",
  //   fontSize: "28px",
  // };

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  // <h1
  // style={{
  // color: "#be3434",
  // border: "1px solid #be3434",
  // padding: "20px",
  // }}
  // >
  //
  // dynamic css styling and classnames are
  // implemented using ternary operators

  return (
    <section className="tasklist">
      <ul>
        {/* <h1 style={styles}>Task List</h1> */}
        <div className="header">
          <h1>TaskList</h1>
          <button className="trigger" onClick={() => setShow(!show)}>
            {show ? "Hide Tasks" : "Show Tasks"}
          </button>
        </div>
        {show &&
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              // info={info}
              task={task}
              handleDelete={handleDelete}
            />
          ))}
      </ul>
      {/* <BoxCard result="success">
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
      </BoxCard> */}
    </section>
  );
};
