import { useState, useEffect } from "react";
import React from 'react';

const Signup = () =>  {
  const [loading, setLoading] = useState("");
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState({});

    async function postFormFetch() {

      const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };
      try {
        setLoading("true");
        const response = await fetch(
          `http://127.0.0.1:8080/signup`, settings
        );
        const json = await response.json();
    if (response.status !== 200) throw Error(json.message);
        return json;
    } catch(error) {
      alert(error);
      setLoading("null");
    }
  }

  useEffect(() => {
    postFormFetch();
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
   postFormFetch();
  }

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]:
      event.target.value }));
  }
  

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