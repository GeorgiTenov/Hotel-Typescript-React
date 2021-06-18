import {useState} from "react";
import IFeaturedRoom from "../interfaces/IFeaturedRoom";
import { FeaturedRoom } from "./FeaturedRoom";
import * as roomOne from "../images/featured rooms/room2.jpg";
import * as roomTwo from "../images/featured rooms/room3.webp";
import * as roomThree from "../images/featured rooms/tripleRoom.jpg";
import "../styles/FeaturedRooms.css";

const room1 = roomOne.default;
const room2 = roomTwo.default;
const room3 = roomThree.default;

export const FeaturedRooms = () =>{
    const [featuredRooms,setFeaturedRooms] = useState<IFeaturedRoom[]>([
        {pricePerNight:500,img:room1,deluxeStyle:"Family Deluxe"},
        {pricePerNight:400,img:room2,deluxeStyle:"Double Deluxe"},
        {pricePerNight:300,img:room3,deluxeStyle:"Single Deluxe"}
    ]);

    return(
        <div className="featured-rooms-container">
            <h1 id="feature-header">Featured Rooms</h1>
            <hr className="ruler"></hr>
            <ul className="featured-rooms-list">
                {featuredRooms.map((room,index)=>(
                  <FeaturedRoom key={index} index={index}  pricePerNight={room.pricePerNight} img={room.img} deluxeStyle={room.deluxeStyle}></FeaturedRoom>
                ))}
            </ul>
        </div>
    )
}