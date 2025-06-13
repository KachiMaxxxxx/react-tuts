import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./header";
import Main from "./maincontent";
import Footer from "./footer";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <Main />

    <Page />
    <Footer/>
  </>
);

function Page() {
  return (
    <ol>
      <h2>Reasons why I'm excited to be learning react</h2>
      <li>It is composable</li>
      <li>It is derivative</li>
      <li>It has a large community support</li>
      <li>Markets demands for it are high</li>
      <li>It could possibly teach me better javascript</li>
    </ol>
  );
}
