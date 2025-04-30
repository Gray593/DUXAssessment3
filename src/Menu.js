import "./App.css";
import { Link } from "react-router-dom";

export default function Menu({menu,setMenu}){   
    return(
        <div className={menu ? "menuPopOut active" : "menuPopOut"} >
            <div className="menuSidebar">
                <div className="menuHeader">
                    <h1 id="menuTitle">Encyclopedia</h1>
                    <h3 id="menuSubTitle">Free Online Encyclopedia</h3>
                    <div className="exit" onClick={()=>setMenu(!menu)}/>
                </div>
                <ul>
                    <li>
                        <Link to="/" className="menuItem">Home</Link>
                    </li>
                    <li>
                        <Link to="/trending" className="menuItem">Trending</Link>
                    </li>
                    <li>
                        <Link to="/" className="menuItem">About Us</Link>
                    </li>
                    <li>
                        <Link to="/" className="menuItem">Bookmarks</Link>
                    </li>
                    <li>
                        <Link to="/" className="menuItem">Settings</Link>
                    </li>
                </ul>
                <h2 className="signIn">Sign In</h2>
            </div>
            <div className="opacityFilter"></div>
        </div>
    )
}