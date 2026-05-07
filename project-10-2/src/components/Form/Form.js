import { useState, useReducer } from "react";
import classes from "./Form.module.css";

function formReducer(state, action){
if (action.type === 'EMAIL_CHANGED')
return {
enteredEmail: action.value,
emailIsValid: action.value.includes('@'),
enteredPassword: state.enteredPassword,
passwordIsValid: state.passwordIsValid
}

if (action.type === 'PASSWORD_CHANGED')
return {
  enteredEmail: state.enteredEmail,
  emailIsValid: state.emailIsValid,
  enteredPassword: action.value,
  passwordIsValid: action.value.trim().length > 7
}
return state;
};

function Form() {
  const [formState, dispatchFormState] = useReducer(formReducer, 
    { enteredEmail: '',
      emailIsValid: false,
      enteredPassword: '',
      passwordIsValid: false
    });

  const formIsValid = formState.emailIsValid && formState.passwordIsValid;

  function changeEmailHandler(event) {
    const value = event.target.value;
    dispatchFormState({
      type: 'EMAIL_CHANGED',
      value: value
    })
  }

  function changePasswordHandler(event) {
    const value = event.target.value;
    dispatchFormState({
      type: 'PASSWORD_CHANGED',
      value: value
    })
  }

  function submitFormHandler(event) {
    event.preventDefault();

    if (!formIsValid) {
      alert("Invalid form inputs!");
      return;
    }

    console.log("Good job!");
    console.log(formState.enteredEmail, formState.enteredPassword);
  }

  return (
<>
<h1>Project 10-2</h1>
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input id="email" 
               type="email" 
               value={formState.enteredEmail}
               onChange={changeEmailHandler} />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input id="password" 
               type="password" 
               value={formState.enteredPassword}
               onChange={changePasswordHandler} />
      </div>
      <button>Submit</button>
    </form>
</>
    
  );
}

export default Form;
