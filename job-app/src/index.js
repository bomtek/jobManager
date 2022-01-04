import React from "react";
import ReactDOM from "react-dom";
import App from "../src/app";
import Update from "./pages/update";
import Create from "./pages/create";
import Signup from "./pages/signup";
import Signin from "./pages/signin"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context"

const Index = () => {
  return (
    <React.Fragment>
      
    

        
        <App />
    
     
    </React.Fragment>
  );
};

ReactDOM.render(
   
  
  <AppProvider>

  <BrowserRouter>
    <Routes>

      <Route path="/create" element={ <Create />} />
      <Route path="/update" element={<Update />} />
      <Route path="/signup" element ={<Signup />} />
      <Route path="/signin" element ={<Signin />} />
      <Route path="/" element={<Index/>} />
    </Routes>
  </BrowserRouter>
  </AppProvider>,
  
    
  document.getElementById("root")
);
