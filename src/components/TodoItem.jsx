function TodoItem({ item, index, deleteTask, startEdit }) {
  return (
    <li>
      {item}

      <button onClick={() => deleteTask(index)}>X</button>

      <button onClick={() => startEdit(item, index)}>
        Edit
      </button>
    </li>
  );
}

export default TodoItem;