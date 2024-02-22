import React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { StrictMode } from "react";
import App from "./App";
import { initializeApp } from "firebase/app";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./routes/LoginPage";
import Sellers from "./routes/Sellers";
import Purchases from "./routes/Purchases";
import ErrorPage from "./routes/error_page";

initializeApp({
  apiKey: "AIzaSyCD8YVhe5uD4-mNRdEWvHg-cvXP4U6biMk",
  authDomain: "dts-crm-6acf4.firebaseapp.com",
  projectId: "dts-crm-6acf4",
  storageBucket: "dts-crm-6acf4.appspot.com",
  messagingSenderId: "851766431705",
  appId: "1:851766431705:web:cc5463b5d28b81d41253c8",
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "dashboard/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "sellers/",
        element: <Sellers />,
      },
      {
        path: "purchaes/",
        element: <Purchases />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
