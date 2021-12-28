import React from "react";
import { useState,useEffect } from "react";

import jobs from "./test";
import Card from "./components/card";
import Aside from "./components/aside";
import Nav from "./components/nav";
import Jumbotron from "./components/jumbotron";
import Search from "./components/search";
import CardIcon from "./components/cardIcon";
import 'bootstrap/dist/css/bootstrap.min.css';
//Importing component for page 

import "./stylesheet/cards.css";


const axios = require('axios')

const App = () => {
  const [datas, setDatas] = useState([]);
 
   useEffect(() => {
    axios
      .get("http://localhost:3001/api/v1/jobs")
      .then((res) => {
         setDatas(res.data.data)
      })
      .catch((error) => {
         console.log(error);
      });
   }, []);

  

  return (
    <>

       
      <Jumbotron />
      <Nav />
      <Search />

      

      <div className="container">
        <Aside jobs={jobs} />

        <div className="cards">
          {datas.map((job) => {
            return (
              <Card key={job._id} {...job} >
                <CardIcon key={job._id} {...job} />
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};


export default App;