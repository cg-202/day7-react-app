import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // let tempCounter = 100;
  // 1. This is a method
  // 2. This method is special method; since it starts with USE PREFIX
  // 3. this special method is also known as HOOKS in react.
  let output = useState(100);
  console.log(output);

  // DESTRUCTING IS HAPPENING.
  let [counter, setCounter] = useState(200);
  let increment = () => {
    setCounter(counter + 100);
  };

  return (
    <div>
      <h1>Hello World</h1>
      <h1>{counter}</h1>
      <h1>
        <button onClick={increment}>INCRMENT</button>
      </h1>
    </div>
  );
}

export default App;
