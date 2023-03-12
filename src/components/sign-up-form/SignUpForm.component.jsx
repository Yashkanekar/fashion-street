import React, { useState, useContext } from "react";
import FormInput from "../form-input/FormInput.component";
import {
  createAuthUserFromEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/UserContext";
import Button from "../button/Button.component";
import "./signup-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const changeHandler = (event) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value }); //"[name]" --> this syntax means that the property where the property name matches with the value of 'name' variable.
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserFromEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, {
        displayName,
      });
      setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  return (
    <div className="signup-form-container">
      <h2>Don't have an account?</h2>
      <span>Signup with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputOptions={{
            value: displayName,
            type: "text",
            required: true,
            name: "displayName",
            onChange: changeHandler,
          }}
        />

        <FormInput
          label="Email"
          inputOptions={{
            value: email,
            type: "email",
            required: true,
            name: "email",
            onChange: changeHandler,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            value: password,
            type: "password",
            required: true,
            name: "password",
            onChange: changeHandler,
          }}
        />

        <FormInput
          label="Confirm Password"
          inputOptions={{
            value: confirmPassword,
            type: "password",
            required: true,
            name: "confirmPassword",
            onChange: changeHandler,
          }}
        />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
