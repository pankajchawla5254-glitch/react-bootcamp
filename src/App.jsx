import { useState } from "react";
import Profile from "./components/Profile";

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <h1>Hello React</h1>

      <h2>Count: {count}</h2>

      <button onClick={()=> setCount(count+1)}>
        Increase
      </button>

      <Profile name="Pankaj Kumar" role="React Intern" location="India" />

      <Profile name="John Doe" role="Frontend Developer" location="USA" />
    </div>
  );
}

export default App;