import { createRoot } from "react-dom/client";
import "./index.css";

const title = "My First React Element";
const desc = "I just learned how to create a React node and render it into DOM";
const myTitleId = "title-id";
const name = "Melvin";

const element = (
  <>
    <h1 id={myTitleId}>{name}'s First React App </h1>
    <p className="main-desc">{desc}</p>
    <input value={10 * 10} />
  </>
);

createRoot(document.getElementById("root")).render(element);
