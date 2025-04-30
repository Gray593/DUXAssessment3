import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import Trending from './Trending.js';
import MichaelJordan from './Michael-Jordan.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [menu,setMenu] = useState(false)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home menu={menu} setMenu={setMenu}/>}/>
        <Route path="trending" element={<Trending menu={menu} setMenu={setMenu}/>} />
        <Route path="Michael-Jordan" element={<MichaelJordan menu={menu} setMenu={setMenu}/>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
