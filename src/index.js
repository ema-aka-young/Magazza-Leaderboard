import React from "react";
import ReactDOM from "react-dom/client";
import BrowserRouter from 'react-router-dom/BrowserRouter'
import "./index.css";
import App from "./App";

ReactDOM.render((
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
));