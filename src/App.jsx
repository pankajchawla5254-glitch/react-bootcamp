import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <h1>Hello React</h1>

      <Profile name="Pankaj Kumar" role="React Intern" location="India" />

      <Profile name="John Doe" role="Frontend Developer" location="USA" />
    </div>
  );
}

export default App;