import React from 'react';
import styled from 'styled-components';
import {Link } from "react-router-dom";
import { useGlobleContext } from "../context";


export default function nav() {
    
    return (
        <Navstyle>
            
            <Link to ="/create">Create</Link>
           
            
        </Navstyle>
    )
}

const Navstyle = styled.div`

height: 10vh;
width: 95vw;
background-color: smokewhite;
border: solid black 3px;
margin: 1px auto;




`

