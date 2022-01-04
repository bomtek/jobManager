import React,{useState} from 'react';
//  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const axios = require('axios');




 


export default function CardIcon(props) {

 

 const deleteItem = (id) => {

axios.delete(`http://localhost:3001/api/v1/jobs/${id}`)
  .then(() => {window.location.reload()}) 
  .catch((error) => { console.log(error)})
}


const updateItem = (id,e) => {
  e.preventDefault();

  axios.findOneAndUpdate(`http://localhost:3001/api/v1/jobs/${id}`)
  .then((data) => {console.log(data)})
  .catch((error) => {console.log(error)})
}


    
    return (
        <IconStyle >
            {/*  Adding event handler  */}

        <Link  to ="/update" onClick={(e) =>  updateItem(props._id,e)}>Update</Link>
        

          
          <button type='button' onClick={()=> deleteItem(props._id)}>Delete</button>
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



