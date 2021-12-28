import React from "react";
import ReactDOM from "react-dom";
import App from "../src/app"
import Update from "./pages/update";
import Create from "./pages/create";
import { BrowserRouter,Routes,Route } from "react-router-dom";


const Index = () => {

return(

  <React.Fragment>
 <App />
</React.Fragment>
)}

ReactDOM.render(

<BrowserRouter>
<Routes>
<Route path ="/create" element={<Create />} />
<Route path="/update" element={<Update />} />
<Route path="/" element={<Index />} />
</Routes>
</BrowserRouter>
, document.getElementById("root"));