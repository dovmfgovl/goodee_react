import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// document.querySelector("#root")
import BookApp from "./BookApp";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
    <BookApp />
    </BrowserRouter>
  </>
);
