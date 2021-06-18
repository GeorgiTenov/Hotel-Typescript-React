import {Header} from "./components/Header";
import {Article} from "./components/Article";
import "./styles/MainContainer.css";
import {Services} from "./components/Services";
import { FeaturedRooms } from "./components/FeaturedRooms";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import {useState} from "react";


function App() {
 
  return (
   
    <div className="main-container">
      <Router>

      <Route path="/" exact>

        <Header></Header>
    
        <Article></Article>

        <Services></Services>

        <FeaturedRooms></FeaturedRooms>
      </Route> 
      <Route path="/rooms"><Rooms></Rooms></Route>
      </Router>
     
    </div>
   
  );
}



export default App;
