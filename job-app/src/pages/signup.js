import React,{useState} from 'react';
import styled  from 'styled-components';
import axios from 'axios';

function Signup() {

    const [user,setUser] = useState({email:"",password:""});

    

const eventHandler = async(e)=>{
   

    const name = e.target.name;
    const value = e.target.value;
    
   setUser({...user,[name]:value});
}

const addUser= () => {

    console.log(user);
    axios
      .post("http://localhost:3001/api/v1/user/signup",  user )
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };




    return (
        <SignupStyled onChange={(e) => {eventHandler(e)}} onSubmit={addUser}>
            <label htmlFor="email">Email

            <input type="email" name='email' id="email" />
            
            </label>


            <label htmlFor="password">Password
            <input type="password" name='password' id='password' />
            </label>
            
            <button className="submit">Sign Up</button>
        </SignupStyled>
    )
}





const SignupStyled = styled.form`

display: flex;
flex-direction: column;
align-items:center;
justify-content: center;

height: 100vh;


label{
   
    display: flex;
    flex-direction: space-around;
    margin-top: 10px;
    width: 300px;

}

label > input{
    margin-left: auto;
    
}

button{

    margin-top: 10px;
    border: none;
    border-radius: 10%;
    height: 50px;
    width: 100px;
    
}


`

export default Signup;