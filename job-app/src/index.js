import React from "react";
import ReactDOM from "react-dom";
import jobs from './test'
import Card from './components/card'
import Aside from './components/aside'
import Nav from './components/nav'
import Jumbotron from "./components/jumbotron";
import Search from "./components/search"
import CardIcon  from "./components/cardIcon";

import './stylesheet/cards.css'

const Dashboard = () => {
  return(

     <>
     <Jumbotron />
     <Nav />
     <Search/>

     <div className="container">


      <Aside  jobs={jobs}/>
    
      <div className="cards">
        {
      jobs.map((job) => {
        
        return(

          <Card key={job.id} {...job}>
          <CardIcon key={job.id} {...job} />
        </Card>

        )
      })
   
    }
       </div>

 
       </div>

    </>
  )
};


ReactDOM.render(<Dashboard />, document.getElementById("root"));
