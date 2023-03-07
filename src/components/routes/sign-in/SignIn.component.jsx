import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";
import SignUpForm from "../../sign-up-form/SignUpForm.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
  };

  return (
    <div>
      <h2>This is the signin page</h2>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
