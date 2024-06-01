import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import App from "./pages/login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

const ul = document.createElement("ul");
const li = document.createElement("li");
li.textContent = "HEY THERE";

ul.appendChild(li);

document.getElementById("root").appendChild(ul);

li.style.color = "white";
