import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="border border-red-500 w-auto flex">
        <Hero />
      </div>
    </>
  );
}

export default App;
