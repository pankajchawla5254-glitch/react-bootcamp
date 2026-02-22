import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null)

  const addTask = () => {
    if (task === "") return;

    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = task;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, task]);
    }

    setTask("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{
      maxWidth: "400px",
      margin: "50px auto",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px"
    }}>
      <h1>Todo App</h1>

      <input
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") addTask();
        }}
      />

      <button onClick={addTask} style={{ marginLeft: "10px" }}>Add</button>

      <p>Total Tasks: {tasks.length}</p>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTask(index)}>X</button>
            <button onClick={() => {
              setTask(item);
              setEditIndex(index);
            }}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;