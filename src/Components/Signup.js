import { useState } from "react";
import useSignUpForm from '../CustomHooks.js';
import React from 'react';

const Signup = () =>  {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const {inputs, handleInputChange, handleSubmit} = useSignUpForm();
  const [userInput, setUserInput] = useState("");
                    // useSignUpForm();

  // var useAsynchFormSubmission = () => {
  //     return null;
  
  // }

  return(
    
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" className="name" onChange={handleInputChange} value={inputs.name} required />
        <br/>
      </div>
      <div>
        <label>Username</label>
        <input type="text" className="username" onChange={handleInputChange} value={inputs.username} required />
        <br/>
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" onChange={handleInputChange} value={inputs.email} required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" onChange={handleInputChange} value={inputs.password}/>
      </div>
      <button type="submit" onSubmit={handleSubmit}>Sign Up</button>
  </form>
  )


}

export default Signup;