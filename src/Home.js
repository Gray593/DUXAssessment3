import Menu from "./Menu.js"
import SearchBar from "./SearchBar.js"
import './App.css';

function Home() {
  return (
    <div className="Home">
      <div className='navBar'>
        <Menu/>
        <SearchBar/>
      </div>
      <div className="title">
        <h1>Encyclopedia</h1>
        <h3>Free Online Encyclopedia</h3>
      </div>
      <div className="gallery">

      </div>
    </div>
  );
} 

export default Home;
