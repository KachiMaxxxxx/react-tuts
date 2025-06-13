import { createRoot } from "react-dom/client";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <main>
    <img
      src="/src/assets/react.svg"
      alt="React Logo"
      width="40px"
    />
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first created in 2013</li>
      <li>Was originally created by Jordan Walker</li>
      <li>Has well over 200k stars on github</li>
      <li>Is mantained by meta</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </main>
);
