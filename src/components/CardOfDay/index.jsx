import Container from "../Container";
import s from "./style.module.css";

export default function CardOfDay({ todo, deleteTasks, deleteTask }) {
  return (
    <div>
      {todo.length ? (
        <Container
          todo={todo}
          deleteTask={deleteTask}
          deleteTasks={deleteTasks}
        />
      ) : (
        <p className={s.noTasksBlock}>No tasks</p>
      )}
    </div>
  );
}
