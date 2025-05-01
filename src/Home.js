import Menu from "./Menu.js"
import SearchBar from "./SearchBar.js"
import './App.css';

import { Link } from "react-router-dom";

function Home({menu,setMenu}) {

  return (
    <div className="home">
      <div className='navBar'>
        <div className="menuIcon" onClick={()=>setMenu(!menu)}>
          <div className="menuBar"></div>
          <div className="menuBar"></div>
          <div className="menuBar"></div>
        </div>
        <SearchBar/>
      </div>
      <div className="title">
        <h1>Encyclopedia</h1>
        <h3>Free Online Encyclopedia</h3>
      </div>
      <div className="gallery">
        <img className="mike" src={require('./mike2.png')}/>
      </div>
      <Menu menu={menu} setMenu={setMenu}/>
      <div className="trendingButton">
        <Link to="/trending" className="trendingButtonText">Trending</Link>
      </div>
    </div>
  );
} 

export default Home;
