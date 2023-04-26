import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <h1>header 1</h1>
        <h2>header 2</h2>
        <h3>header 3</h3>
      </div>
    </>
  );
}

export default App;
