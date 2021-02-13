import { useState } from "react";
import useSignUpForm from '../CustomHooks.js';


const Signup = () =>  {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const {inputs, handleInputChange, handleSubmit} = useSignUpForm(signup);
  const [userInput, setUserInput] = useState("");
  const [result, loading] = useAsyncHook(userInput);

  var signup = () => {
    alert(
      `User Created!
           Name: ${inputs.firstName} ${inputs.lastName}
           Email: ${inputs.email}`
    );
  }

  return(
    
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input type="text" className="firstName" onChange={handleInputChange} value={inputs.firstName} required />
        <br/>
        <label>Last Name</label>
        <input type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName} required />
      </div>
      <div>
        <label>Email Address</label>
        <input type="email" name="email" onChange={handleInputChange} value={inputs.email} required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password1" onChange={handleInputChange} value={inputs.password1}/>
      </div>
      <div>
        <label>Re-enter Password</label>
        <input type="password" name="password2" onChange={handleInputChange} value={inputs.password2}/>
      </div>
      <button type="submit" onSubmit={handleSubmit}>Sign Up</button>
  </form>
  )


}

export default Signup;