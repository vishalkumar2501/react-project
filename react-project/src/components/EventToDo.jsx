import { useState } from "react";

export default function EventToDo() {
  const [tasks, setTasks] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const inputValue = e.target.task.value.trim();

    if (inputValue === "") {
      alert("Task cannot be empty");
      return;
    }

    setTasks([...tasks, inputValue]);
    e.target.reset();
  }

  function handleDelete(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" placeholder="Add your task here" />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
