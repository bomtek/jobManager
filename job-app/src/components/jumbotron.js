import React from 'react';
import styled from 'styled-components';

export default function Jumbotron() {
    return (
        <JumbotronStyle>
            <h1>Job Manager</h1>
            
        </JumbotronStyle>
    )
}

const JumbotronStyle = styled.div`

height: 20vh;
width:95vw;
margin: 0px auto;
background: coral;
position: relative;
border: solid black 1px;
display: flex;
justify-content: center;
align-items: center;



h1{
    padding-top: auto;
    color: white;
    
}




`