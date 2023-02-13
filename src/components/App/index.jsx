import { useState } from "react";
import CardOfDay from "../CardOfDay";
import Form from "../Form";


function App() {
  const [todo, setTodo] = useState([]);

  const addTask = (day, priority, description) => {
    const newTask = { id: Date.now(), day, priority, description };
    setTodo([...todo, newTask]);
  };

  const deleteTasks = day =>{
    setTodo(todo.filter((item)=>item.day !== day))
  }
  const deleteTask = dellId =>{
    setTodo(todo.filter((item)=>item.id !== dellId))
  }
  console.log(todo);

  return (
    <div style={{background:'#ecf0f1', padding: '20px', border: "1px solid black", width:"80%",margin:"0 auto" }}>
      <Form addTask={addTask} />
      <CardOfDay todo = {todo} deleteTasks={deleteTasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
