import React from "react";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import App from "../App";

export function CreateEmailUser(props) {
  createUserWithEmailAndPassword(props.auth, props.email, props.password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("erroe code:" + errorCode + "error:" + errorMessage);
    });
}

export const UserEmailSignin = (auth, email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      return userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("erroe code:" + errorCode + "error:" + errorMessage);
    });
};

export const Signout = (auth) => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("erroe code:" + errorCode + "error:" + errorMessage);
    });
};

export async function GooogleSignin(auth, googleProvider) {
  const userCred = await signInWithPopup(auth, googleProvider);
}
