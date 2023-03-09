import "./TaskCard.css";
import styles from "./TaskCard.module.css";

export const TaskCard = ({ task, handleDelete }) => {
  return (
    <div className="taskcard">
      <li className={task.completed ? "completed" : "incomplete"}>
        {/* <span className={styles.title}> */}
        <span>
          {task.id} - {task.name}
        </span>
        <button onClick={() => handleDelete(task.id)} className="delete">
          Delete
        </button>
      </li>
    </div>
  );
};

//Keys are not being recieved here as they are passed to the top which in
//this case is the TaskCard component.
