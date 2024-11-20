import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="#" target="_blank"></a>
        <a href="#" target="_blank">
          <img
            src={reactLogo}
            className="logo react"
            alt="Artist Management System"
          />
        </a>
      </div>
      <h1>Artist Management System</h1>
    </>
  );
}

export default App;
