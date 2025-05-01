import Menu from "./Menu.js"
import SearchBar from "./SearchBar.js"
import "./App.css";
import { useState } from "react";

export default function MichaelJordan({menu,setMenu}){
    const pageInfo = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean est justo, ultricies eget suscipit sit amet, vulputate sit amet ex. Vivamus accumsan pellentesque neque, ut aliquam turpis pellentesque ut. Nullam eu rhoncus sapien. Nullam suscipit quam ut dui cursus, egestas efficitur metus congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed laoreet justo tellus, in maximus est finibus sit amet. Maecenas interdum quam vitae ipsum mollis dictum. Phasellus consectetur ullamcorper mauris ut pharetra. Integer ut interdum risus. Suspendisse sapien arcu, iaculis in semper eget, convallis vel massa. Sed vel orci sodales, scelerisque lacus elementum, ornare mi. Quisque porttitor bibendum hendrerit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean est justo, ultricies eget suscipit sit amet, vulputate sit amet ex. Vivamus accumsan pellentesque neque, ut aliquam turpis pellentesque ut. Nullam eu rhoncus sapien. Nullam suscipit quam ut dui cursus, egestas efficitur metus congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed laoreet justo tellus, in maximus est finibus sit amet. Maecenas interdum quam vitae ipsum mollis dictum. Phasellus consectetur ullamcorper mauris ut pharetra. Integer ut interdum risus. Suspendisse sapien arcu, iaculis in semper eget, convallis vel massa. Sed vel orci sodales, scelerisque lacus elementum, ornare mi. Quisque porttitor bibendum hendrerit. Pellentesque at velit sed est pharetra blandit eget sit amet velit. Curabitur ut mattis turpis. Etiam nec mi erat. Pellentesque vel pulvinar tortor. Pellentesque non lacinia ante. Vivamus finibus risus ac tellus vestibulum, a semper ligula elementum. Sed quam ex, venenatis sit amet lacus ut, congue condimentum libero. Fusce ut congue lectus. Suspendisse fringilla, odio nec finibus sollicitudin, est mauris pretium orci, quis accumsan leo lectus at lacus. Nulla vel sagittis dolor. Fusce tempus purus nec consequat commodo. Sed vel sem nulla. Aliquam faucibus ex lacus, vel vehicula felis scelerisque sit amet. In interdum facilisis luctus. Phasellus vel ultrices erat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean est justo, ultricies eget suscipit sit amet, vulputate sit amet ex. Vivamus accumsan pellentesque neque, ut aliquam turpis pellentesque ut. Nullam eu rhoncus sapien. Nullam suscipit quam ut dui cursus, egestas efficitur metus congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed laoreet justo tellus, in maximus est finibus sit amet. Maecenas interdum quam vitae ipsum mollis dictum. Phasellus consectetur ullamcorper mauris ut pharetra. Integer ut interdum risus. Suspendisse sapien arcu, iaculis in semper eget, convallis vel massa. Sed vel orci sodales, scelerisque lacus elementum, ornare mi. Quisque porttitor bibendum hendrerit. Pellentesque at velit sed est pharetra blandit eget sit amet velit. Curabitur ut mattis turpis. Etiam nec mi erat. Pellentesque vel pulvinar tortor. Pellentesque non lacinia ante. Vivamus finibus risus ac tellus vestibulum, a semper ligula elementum. Sed quam ex, venenatis sit amet lacus ut, congue condimentum libero. Fusce ut congue lectus. Suspendisse fringilla, odio nec finibus sollicitudin, est mauris pretium orci, quis accumsan leo lectus at lacus. Nulla vel sagittis dolor. Fusce tempus purus nec consequat commodo. Sed vel sem nulla. Aliquam faucibus ex lacus, vel vehicula felis scelerisque sit amet. In interdum facilisis luctus. Phasellus vel ultrices erat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean est justo, ultricies eget suscipit sit amet, vulputate sit amet ex. Vivamus accumsan pellentesque neque, ut aliquam turpis pellentesque ut. Nullam eu rhoncus sapien. Nullam suscipit quam ut dui cursus, egestas efficitur metus congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed laoreet justo tellus, in maximus est finibus sit amet. Maecenas interdum quam vitae ipsum mollis dictum. Phasellus consectetur ullamcorper mauris ut pharetra. Integer ut interdum risus. Suspendisse sapien arcu, iaculis in semper eget, convallis vel massa. Sed vel orci sodales, scelerisque lacus elementum, ornare mi. Quisque porttitor bibendum hendrerit."
    ]
    const[bookmark,setBookmark] = useState(false)
    return(
        <div className="michaelJordan" >
            <div className="micHeader" >
                <div className='navBar'>
                <div className="menuIcon" onClick={()=>setMenu(!menu)}>
                    <div className="menuBar"></div>
                    <div className="menuBar"></div>
                    <div className="menuBar"></div>
                </div>
                    <SearchBar/>
                </div>
                <h1 className="micTitle">Michael Jordan</h1>               
            </div>
            <div className="banner">
            <div className="title">
                <h1 id="bannerTitle">Encyclopedia</h1>
                <h3 id="bannerSubtitle">Free Online Encyclopedia</h3>
            </div>
            <div className={bookmark ? "bookmarkButton active" : "bookmarkButton"} onClick={()=>setBookmark(!bookmark)}>
                <h5 className="bookmarkText">Bookmark</h5> 
            </div>
            </div>
            <div className="pageContents">
                <h3 className="contentHeader">Overview</h3>
                <p>{pageInfo[0]}</p>
                <h3 className="contentHeader">Early Life</h3>
                <p>{pageInfo[1]}</p>
                <h3 className="contentHeader">Career</h3>
                <p>{pageInfo[2]}</p>
                <h3 className="contentHeader">Personal Life</h3>
                <p>{pageInfo[3]}</p>
            </div>
            <Menu menu={menu} setMenu={setMenu}/>
            <div className="footer">
                <h4 className="footerText">Privacy Policy</h4>
                <h4 className="footerText">Terms of Use</h4>
            </div>

        </div>
    )
}