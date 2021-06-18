import IFeaturedRoom from "../interfaces/IFeaturedRoom";
export  const FeaturedRoom:React.FC<IFeaturedRoom> = (room:IFeaturedRoom)=>{
    return( <li key={room.index}>
        <img className="featured-img" src={room?.img} alt=""></img>
        <div className="price-container">
            <h2>{`$ ${room?.pricePerNight}`}</h2>
            <p>per night</p>
        </div>
        <h1>{room.deluxeStyle}</h1>
    </li>);
    
}