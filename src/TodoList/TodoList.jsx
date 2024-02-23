import { useState } from "react";
import "../App.css";

export default function TodoList() {
  const [TodoList, setTodoList] = useState([]);
  const [NewTask, setNewTask] = useState("");

  const HandleChange = (e) => {
    setNewTask(e.target.value);
  };
  const AddTask = (e) => {
    e.preventDefault();
    const task = {
      id: TodoList.length === 0 ? 1 : TodoList[TodoList.length - 1].id + 1,
      taskName: NewTask,
    };
    NewTask !== ""
      ? setTodoList([...TodoList, task])
      : alert("Enter a value!!");
  };

  const deleteTask = (id) => {
    alert(`Sure you want to delete the task ${id} ?`);
    const newTodoList = TodoList.filter((task) => task.id !== id);
    setTodoList(newTodoList);
  };
  return (
    <div className="TodoList">
      <div className="addTask">
        <input type="text" onChange={HandleChange} />
        <button onClick={AddTask}>Add Task</button>
      </div>
      <div className="taskList">
        {TodoList.map((task) => {
          return (
            <>
              <h3>
                {task.id} : {task.taskName}
              </h3>
              <button onClick={() => deleteTask(task.id)}>X</button>
            </>
          );
        })}
      </div>
    </div>
  );
}
