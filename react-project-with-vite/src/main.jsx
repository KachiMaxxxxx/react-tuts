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
    <Page/>
  </main>
);

function Page(){
  return(
    <ol>
      <h2>Reasons why I'm excited to be learning react
      </h2>
      <li>It is composable</li>
      <li>It is derivative</li>
      <li>It has a large community support</li>
      <li>Markets demands for it are high</li>
      <li>It could possibly teach me better javascript</li>
    </ol>
  )
};