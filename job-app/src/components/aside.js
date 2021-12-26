import React from 'react';
import styled from 'styled-components';


export default function Aside(props) {
     let cata = [];
     props.jobs.forEach((job) => {
        
        cata.push(job.catagory);
        
    })

    let catSet = new Set(cata);
    console.log(catSet);
    return (
        <AsideStyle >

            <h2>Catagories :</h2>
            <hr/>

           {
               Array.from(catSet).map((item) => {
                   return (
                       <a href="#">{item}</a>
                   )
               })
           }
          


        
            
        </AsideStyle>
    )
}

const AsideStyle = styled.div`

height: 100%;
width: 100%;


 background-color: green;
 



 a{
     display: block;
     text-decoration: none;
     color: white;
     font-size: 1.2em;
 }


`

