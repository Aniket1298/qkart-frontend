import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  // TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Add Target container ID (refer public/index.html)
   document.getElementById('root')
);
