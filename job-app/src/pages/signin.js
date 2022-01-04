import React from 'react';
import styled  from 'styled-components';

function Signin() {
    return (
        <SignupStyled>
            <label htmlFor="email">Email

            <input type="email" name='email' id="email" />
            
            </label>


            <label htmlFor="password">Password
            <input type="password" name='password' id='password' />
            </label>
            
            <button className="subit">Sign In</button>
        </SignupStyled>
    )
}

export default Signin



const SignupStyled = styled.div`

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