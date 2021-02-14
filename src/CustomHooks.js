import React from 'react';
import {useState} from 'react';

const useSignUpForm = () => {
  const [inputs, setInputs] = useState({});
  const [newUser, setNewUser] = useState({})
  const [result, setResult] = React.useState([]);
    const [loading, setLoading] = useState("");

  React.useEffect(() => {
    async function signUpUser() {
      try {
        setLoading("true");
        const response = await fetch(
          `http://127.0.0.1:8080/signup`
        );
        const json = await response.json();
          setResult(
            json.items.map(item => {
              console.log(item);
            })
          )
        
    } catch(error) {
      alert(error);
      setLoading("null");
    }
  }

 signUpUser();
   
  });

  const handleSubmit = (event) => {
    if(event){
      event.preventDefault();
     
    }
  }

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]:
      event.target.value }));
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}

export default useSignUpForm;