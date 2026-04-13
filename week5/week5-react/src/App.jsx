import { useRef } from "react";

export default function App(){
  
const emailRef = useRef();

  function updateEmailHandler(event){
    setEnteredEmail(event.target.value);
  }

  function submitFormHandler(event){
    event.preventDefault();

    console.log(emailRef.current.value);
  }

    return (
    <form onSubmit={submitFormHandler}>
      <label htmlFor='email'>Your email</label>
      <input type="email" id='email' ref={emailRef} />
      <button>Save</button>
    </form>
  );
  }