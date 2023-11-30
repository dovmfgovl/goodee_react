import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// document.querySelector("#root")
import BookApp from "./BookApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <App /> */}
    <BookApp />
  </>
);
