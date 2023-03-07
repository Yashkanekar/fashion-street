import React, { useState } from "react";

const SignUpForm = () => {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  console.log(formFields);

  const changeHandler = (event) => {
    const { value, name } = event.target;

    setFormFields({ ...formFields, [name]: value }); //"[name]" --> this syntax means that the property where the property name matches with the value of 'name' variable.
  };

  return (
    <div>
      <h1>Signup with your email and password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input
          value={displayName}
          type="text"
          required
          name="displayName"
          onChange={changeHandler}
        ></input>

        <label>Email</label>
        <input
          onChange={changeHandler}
          value={email}
          type="email"
          required
          name="email"
        ></input>

        <label>Password</label>
        <input
          onChange={changeHandler}
          value={password}
          type="password"
          required
          name="password"
        ></input>

        <label>Confirm Password</label>
        <input
          value={confirmPassword}
          onChange={changeHandler}
          type="password"
          required
          name="confirmPassword"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
