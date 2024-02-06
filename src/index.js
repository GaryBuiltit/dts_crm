import React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import { StrictMode } from "react";
// import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App";

// const router = createHashRouter([
//   {
//     path: "/",
//     element: <DashBoard />,
//     children: [],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
