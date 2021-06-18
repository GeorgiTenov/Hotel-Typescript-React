 import * as room from "../images/room.jpg"; 
 import "../styles/rooms page/rooms.css";
 import Nav from "./Nav";
 import { SearchRooms } from "./SearchRooms";
 import {Link} from "react-router-dom";

 const Rooms = ()=>{
    return(
        <div className="rooms-container">
            <Nav></Nav>
            <img className="rooms-room" src={room.default} alt=""/>
            <div className="rooms-article">
                <h1>Our Rooms</h1>
                <hr></hr>
                <Link className="link-return" to="/">RETURN HOME</Link>
            </div>
            <SearchRooms></SearchRooms>
        </div>
    )
}

export default Rooms;