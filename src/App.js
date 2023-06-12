import React from "react";
import "./App.css";
import Header from "./componets/Header/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Home/HomePage";
import Footer from "./componets/Footer/Footer";
import SinglePage from "./componets/watch/Singlepage";
import Signup from "./componets/Homes/Signup";
import Contact from "./componets/upcoming/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/series"  Component={HomePage}></Route>
        <Route path="/movies"  Component={HomePage}></Route>
        <Route path="/signup" Component={Signup} />
        <Route path="/contact" Component={Contact} />
        <Route  path="/SinglePage/:id" Component={SinglePage} />
        
      </Routes>
      <Footer />
      
     
    </>
  );
}

export default App;
