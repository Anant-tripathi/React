export const TaskCard = ({ task, handleDelete, info }) => {
  return (
    <li className={task.completed ? "completed" : "incomplete"}>
      <span>
        {task.id} - {task.name} = {info}
      </span>
      <button onClick={() => handleDelete(task.id)} className="delete">
        Delete
      </button>
    </li>
  );
};

//Keys are not being recieved here as they are passed to the top which in
//this case is the TaskCard component.
