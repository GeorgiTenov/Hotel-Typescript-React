import Home from "./Home";
import Rooms from "./Rooms";
import "../styles/Nav.css";
import {Link} from "react-router-dom";

 const Nav = () =>{
    return(
        <nav>
            <div className="resort-container"><h1>Beach Resort</h1></div>
            <ul className="nav-list">
                <li>
                    <Link to="/" className="link">Home</Link>
                </li>
                <li>
                <Link  to="/rooms" className="link">Rooms</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;