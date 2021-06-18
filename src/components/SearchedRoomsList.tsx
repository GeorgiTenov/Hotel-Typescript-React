import ISearchRooms from "../interfaces/ISearchRooms";
import RoomTypesOptions from "../enums/RoomTypeOptions";
import * as pic1 from "../images/searched rooms/searchedRoom1.jpg";
import * as pic2 from "../images/searched rooms/searchedRoom2.jpg";
import * as pic3 from "../images/searched rooms/searchedRoom3.jpg";
import * as pic4 from "../images/searched rooms/searchedRoom4.jpg";
import * as pic5 from "../images/searched rooms/searchedRoom5.jpg";
import * as pic6 from "../images/searched rooms/searchedRoom6.jpg";
import * as pic7 from "../images/searched rooms/searchedRoom7.jpg";
import * as pic8 from "../images/searched rooms/searchedRoom8.jpg";
import * as pic9 from "../images/searched rooms/searchedRoom9.jpg";


export const roomsList:ISearchRooms[] = [
    {roomType:RoomTypesOptions.Double,roomSize:3,guests:5,breakfast:true,pets:false,roomPrice:900,url:pic1.default},
    {roomType:RoomTypesOptions.Double,roomSize:3,guests:5,breakfast:true,pets:false,roomPrice:500,url:pic2.default},
    {roomType:RoomTypesOptions.Family,roomSize:4,guests:6,breakfast:false,pets:true,roomPrice:650,url:pic3.default},
    {roomType:RoomTypesOptions.Double,roomSize:3,guests:4,breakfast:true,pets:true,roomPrice:1000,url:pic4.default},
    {roomType:RoomTypesOptions.Triple,roomSize:2,guests:3,breakfast:false,pets:false,roomPrice:450,url:pic5.default},
    {roomType:RoomTypesOptions.Single,roomSize:1,guests:4,breakfast:false,pets:true,roomPrice:730,url:pic6.default},
    {roomType:RoomTypesOptions.Triple,roomSize:7,guests:7,breakfast:true,pets:true,roomPrice:1900,url:pic7.default},
    {roomType:RoomTypesOptions.Single,roomSize:1,guests:5,breakfast:true,pets:false,roomPrice:500,url:pic8.default},
    {roomType:RoomTypesOptions.Family,roomSize:4,guests:6,breakfast:false,pets:true,roomPrice:550,url:pic9.default}
];


export const getAllRooms = () => {
    return roomsList;
}

export const getRoomsWithPetsAllowed = (searchRooms:ISearchRooms[]) =>{
    const allowedPetsRooms = searchRooms.filter(room => room.pets);
    return allowedPetsRooms;
}

export const getRoomsBySize = (searchRooms:ISearchRooms[],size:number) =>{
    const filteredRooms = searchRooms.filter(room => room.roomSize === size);
    return filteredRooms;
}

export const getRoomsWithBreakfast = (searchRooms:ISearchRooms[]) => {
    const roomsWithBreakfast = searchRooms.filter(room => room.breakfast);
    return roomsWithBreakfast;
}

export const getRoomsByPrice = (searchRooms:ISearchRooms[],price:number) => {
    const roomsPriceFiltered = searchRooms.filter(room => room.roomPrice <= price);
    return roomsPriceFiltered;

}

export const getRoomsByGuests = (searchRooms:ISearchRooms[],guests:number) => {
    const roomsGuestsFiltered = searchRooms.filter(room => room.guests === guests);
    return roomsGuestsFiltered;
}

export const getCheapestRoomsFirst = () => {
    const cheapestRooms = roomsList.sort((a,b) => a.roomPrice - b.roomPrice);
    return cheapestRooms;
}

export const getExpensiveRoomsFirst = () => {
    const expensiveRooms = roomsList.sort((a,b) => b.roomPrice - a.roomPrice);
    return expensiveRooms;
}

export const getRoomsByType = (type:RoomTypesOptions) => {
    const filteredRooms = roomsList.filter(room => room.roomType === type);
    return filteredRooms;
}
 