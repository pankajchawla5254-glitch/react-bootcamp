import { useState } from "react";

function App() {
  const [name, setName] = useState("pankaj");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome ${name}`);
  };

  return (
    <div>
      <h1>Mini Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      <p>You typed: {name}</p>
    </div>
  );
}

export default App;