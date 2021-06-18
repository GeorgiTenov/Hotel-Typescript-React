import RoomTypesOptions from "../enums/RoomTypeOptions";

interface ISearchRooms{
    roomType:RoomTypesOptions;
    guests:number;
    roomPrice:number,
    roomSize:number,
    breakfast:boolean,
    pets:boolean,
    url?:string
}

export default ISearchRooms;