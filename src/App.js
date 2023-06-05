/*
Author: Portia Maile
Date: June 5, 2023

This funtional componet provides a route to the Display componet
*/

import React , {useState, useEffect} from "react";
import Display from "../src/components/Display";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
     
     <Route path="/" element={<Display/>}/>

     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
