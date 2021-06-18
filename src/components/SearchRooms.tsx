import "../styles/rooms page/searchRoom.css";
import React, {useEffect, useState,useReducer,useRef,useCallback} from "react";
import { setTextRange } from "typescript";
import { Console } from "console";
import RoomTypeOptions from "../enums/RoomTypeOptions";
import IAction from "../interfaces/IAction";
import ISearchRooms from "../interfaces/ISearchRooms";
import {roomsList,getCheapestRoomsFirst,getAllRooms,
getExpensiveRoomsFirst,getRoomsByGuests,
getRoomsByPrice,getRoomsBySize,
getRoomsWithPetsAllowed,getRoomsWithBreakfast,getRoomsByType} from "./SearchedRoomsList";


export const SearchRooms = () =>{
const selectRef = useRef<HTMLSelectElement | null >(null);

    function roomTypeReducer(state:ISearchRooms[],action:IAction | null){
        switch(action?.type){
            case "All":{
                setRooms(getAllRooms());
                return state = rooms;
            }

            case "Double":{
                const doubleRooms = getRoomsByType(RoomTypeOptions.Double);
                setRooms(doubleRooms);
                return state = rooms;
            }
                    

            case "Family":{
                const familyRooms = getRoomsByType(RoomTypeOptions.Family);
                setRooms(familyRooms);
                return state = rooms;
            }
                   

            case "Single":{
                const singleRooms = getRoomsByType(RoomTypeOptions.Single);
                setRooms(singleRooms);
                return state = rooms;
            }
                        

            case "Triple":{
                const tripleRooms = getRoomsByType(RoomTypeOptions.Triple);
                setRooms(tripleRooms);
                return state = rooms;
            }
                            

            default:{
                setRooms(getAllRooms());
                return state;
            }

        }
    }
    const [range,setRange] = useState<string>();
    const [rooms,setRooms] = useState<ISearchRooms[]>(roomsList);
    const [searchRooms,dispatch] = useReducer(roomTypeReducer,[]);
   

    function handleSelect(){
      dispatch({type:selectRef.current?.value});
    }

    const cheapestRoom:number = getCheapestRoomsFirst()[0].roomPrice; 
    const mostExpensiveRoom:number = getExpensiveRoomsFirst()[0].roomPrice;
    
    function showRoomsWithGuests(e:React.ChangeEvent<HTMLInputElement>){
         const filteredGuests = getRoomsByGuests(searchRooms,parseInt(e.target.value));
         if(filteredGuests.length > 0){
            setRooms(rooms => rooms = filteredGuests);
         }
       

        return;
    }

   

    function showRoomsByPrice(e:React.ChangeEvent<HTMLInputElement>){
         const roomsByPrice = getRoomsByPrice(searchRooms,parseInt(e.target.value));
        setRange(e.target.value)
        setRooms(rooms => rooms = roomsByPrice);
        return roomsByPrice;
    }

    function showRoomsByRoomSize(e:React.ChangeEvent<HTMLInputElement>){
         const roomsBySize = getRoomsBySize(searchRooms,parseInt(e.target.value));
        setRooms(rooms => rooms = roomsBySize);
        return roomsBySize;
    }

    function getRoomsWithBreakfastAllowed(e:React.ChangeEvent<HTMLInputElement>){

        if(e.target.checked){
            const breakfastRooms = getRoomsWithBreakfast(searchRooms);
            setRooms(rooms => rooms = breakfastRooms);
            return breakfastRooms;
        }

        else setRooms(rooms);
      
    }

    function getRoomsWithPets(e:React.ChangeEvent<HTMLInputElement>){
        if(e.target.checked){
            const roomsWithPets = getRoomsWithPetsAllowed(searchRooms);
            setRooms(rooms => rooms = roomsWithPets);
            return roomsWithPets;
        }
        else setRooms(rooms);
    }

    return(
        <div className="search-room-container">
            <h1>Search Rooms</h1>
            <hr></hr>
            <p>Room Type</p>
            <select  ref={selectRef} onChange={()=>handleSelect()}>
              {Object.keys(RoomTypeOptions).map((type,index)=>(
                  <option key={index}>{type}</option>
              ))}
            </select>
            <p>Guests</p>
            <input type="number" onChange={e => showRoomsWithGuests(e)}/>
            <p>Room price</p>
            <input type="range" min={cheapestRoom} max={mostExpensiveRoom} onChange={e => showRoomsByPrice(e) }/>
            <p>${range}</p>
            <p>Room size</p>
            <input type="text" style={{width:"50px"}} onChange={e => showRoomsByRoomSize(e)}/>
            <input type="text" style={{width:"50px"}}/>
            <input type="checkbox" onChange={e => getRoomsWithBreakfastAllowed(e)}/><p>Breakfast</p>
            <input type="checkbox" onChange={e => getRoomsWithPets(e)}/><p>Pets</p>

            <ul className="rooms">
                {rooms.length > 0 ? rooms.map((room,index)=>(
                    <li key={index}>
                        <p>${room.roomPrice}</p>
                        <img src={room?.url}></img>
                    </li>
                )): <p>No rooms available</p>}
            </ul>
        </div>
    )
}