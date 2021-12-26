import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const jobId = (cat) =>{
    console.log(cat)
}


export default function CardIcon(props) {

 const{display,setDisplay} = useState(".icon-hidden")

 const setDisClass =()=>{
     setDisplay(".icon-show")
 }


    
    console.log(props)
    return (
        <IconStyle className={display} onMouseOver={setDisClass}>
            {/*  Adding event handler  */}
          <button type='text'>Edit</button>
          <button type='button' onClick={()=> console.log(props.id)}>Delete</button>
          <button type='reset'>Reset</button>
         
        </IconStyle>
    )
}

const IconStyle = styled.div`

.icon-hidden {

display: none;
}

.icon-display{
    border: solid yellow 1px;
    display: flex;
    justify-content: space-around;
}

`



