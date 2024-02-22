import React from "react";
import auth from "../index.js";
import Login from "../components/Login.jsx";
import { useState } from "react";
import Signup from "../components/Signup.jsx";

export default function LoginPage() {
  const [formType, setFormState] = useState("login");

  function formSwitch() {
    formType === "login" ? setFormState("signup") : setFormState("login");
  }

  if (formType === "login") {
    return <Login switchHandler={formSwitch} />;
  }

  if (formType === "signup") {
    return <Signup switchHandler={formSwitch} />;
  }
}
