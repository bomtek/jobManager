import React from 'react';
import styled from 'styled-components';

export default function Search() {
    return (
        <SearchStyle  >

            <input type="text" />
            
        </SearchStyle>
    )
}

const SearchStyle = styled.div`

height: 10vh;
width: 95vw;
border: solid black 2px;
margin: 0px auto;


input{
height: 100%;
width: 90%;
 margin: auto auto;
font-size: 1em;
background: skyblue;

}

`
