import "./App.css";
import Menu from "./Menu.js"
import SearchBar from "./SearchBar.js"
import Tile from "./Tile.js"
import  {tileArray} from "./tileArray.js";

export default function Trending({menu,setMenu}){
    
    return(
        <div className="trending">
            <div className='navBar'>
                <div className="menuIcon" onClick={()=>setMenu(!menu)}/>
                <SearchBar/>
            </div>
            <h1 className="trendingPageTitle">Trending</h1>
            <h1 className="trendingBackground">Trending</h1>
            <div className="trendingGallery">
                {tileArray.map((i)=> <Tile key={i.name} name={i.name} src={i.src} link={i.link} overview={i.overview}/>)}

            </div>
            <Menu menu={menu} setMenu={setMenu}/>
       </div>
    )
}