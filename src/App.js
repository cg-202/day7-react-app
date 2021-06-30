import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // this is recommend for inline styling
  let mystyle = { fontSize: 21, backgroundColor: "red" };

  return (
    <div>
      <h1>External Styling</h1>
      <p className="primary">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>

      <h1>Inline Styling in React</h1>

      <p style={{ fontSize: 21, background: "tomato" }}>
        This approach is not recommended!!
      </p>

      {/** Style Using the object */}
      <p style={mystyle}>Lorem ipsum dolor sit amet.</p>
    </div>
  );
}

export default App;
