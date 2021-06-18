import { IsOptional } from "prop-types";
import {useState} from "react";
import IService from "../interfaces/IService";
import "../styles/Services.css";
import * as cock from "../images/cocktail.jpg";
import * as  hiking from  "../images/hiking.jpg";
import * as shuttle from "../images/shuttle.jpg";
import * as beer from "../images/beer.jpg";

//get images urls's
const cocktailImg = cock.default;
const hikingImg = hiking.default;
const shuttleImg = shuttle.default;
const beerImg = beer.default;

export const Services = ()=>{
    const [services,setServices] = useState<IService[]>([
        {name:"Free Cocktail",image:cocktailImg,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {name:"Endless Hiking",image:hikingImg,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {name:"Free Shuttle",image:shuttleImg,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {name:"Strongest Beer",image:beerImg,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
    ]);
    return(
        <div className="services-main-container">
        <h1>Services</h1>
        <hr></hr>
        <ul className="services-list-container">
            {services.map((service,index)=>(
                <li key={index}>
                    <div>
                    <img className="img" src={service.image} alt=""></img>
                    <h2>{service.name}</h2>
                    <p>{service.description}</p>
                    </div>
                </li>
            ))}
        </ul>

        </div>
    )
}