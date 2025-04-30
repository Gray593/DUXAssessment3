import "./App.css";
import Menu from "./Menu.js"
import SearchBar from "./SearchBar.js"

export default function Trending({menu,setMenu}){
    
    return(
        <div className="Trending">
            <div className='navBar'>
                <div className="menuIcon" onClick={()=>setMenu(!menu)}/>
                <SearchBar/>
            </div>
            <div className="trendingGallery">

            </div>
            <Menu menu={menu} setMenu={setMenu}/>
       </div>
    )
}