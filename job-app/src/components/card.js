import React from "react";
import { useEffect,useState} from "react";
import '../stylesheet/card.css'
import styled from 'styled-components';



const Card = (props)=>{



   

   console.log(props);
    const {id,title,catagory,organisation,website,status,dueDate,description,children} = props;

    const [isShowIcon, setShowIcon] = useState(false);

const showIcon = ()=> {
     setShowIcon(true);
  };

const hideIcon = ()=> {
    setShowIcon(false);
}
    
   



    return(
        <CardStyled >
            <div className="card-header" onMouseOver={()=> showIcon()} onMouseLeave={() => {hideIcon()}} >
            
            <h2>{title}</h2>
            <h3>{organisation}</h3>
           {isShowIcon && children} 
       
            </div>
            <div className="card-body">
            <a href={website}>{website}</a>
            <p>Status- {status}</p>
            <p>Description:{description}</p>
            </div>
            <div className="card-footer">
            <p className="dueDate">Due- {dueDate}</p>
            </div>
        </CardStyled>
    )
        
       


}

const CardStyled = styled.div`


     min-width: auto;
     height: 40vh;
    min-height: auto;
  
    border: solid green 1px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    

    .card-header ,.card-footer{
        align-self: center;
      
    }

    .card-body{
        
        height: 60%;
        width: 90%;
        margin: 0px auto;
        display: flex;
        flex-direction: column;
    
    }

`
export default Card;