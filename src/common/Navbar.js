import React, { useState } from "react";
import { BrowserRouter , Route, Routes, Link } from "react-router-dom";
import { AboutUs } from '../AboutUs';
import { Home } from '../Home';
import Activity1 from "../components/Activity/Activity1";
import Counter from "../components/Activity/Counter";
import Card1 from "../components/Cards/Card1";
import GetEployee from "../components/Activity/GetEployee";
export default function Navbar() {
  const[data,setData] = useState("Richa");
    return (
      <>
       <BrowserRouter>
      <nav>
    <div className="px-3 py-2 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
           test
          </a>          
          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
            <Link to="/" className="nav-link text-white">Home</Link>
            </li>
            <li>
            <Link to="/AboutUs" className="nav-link text-white">About Us</Link>
            </li>
            <li>
            <Link to="/Activity1" className="nav-link text-white">Activity1</Link>
            </li>
            <li>
            <Link to="/Counter" className="nav-link text-white">Counter</Link>
            </li>
            <li>
            <Link to="/Card1" className="nav-link text-white">Card1</Link>
            </li>
            <li>
            <Link to="/GetEployee" className="nav-link text-white">Employee</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="px-3 py-2 border-bottom mb-3">
      <div className="container d-flex flex-wrap justify-content-center">
        <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
          <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-light text-dark me-2">Login</button>
          <button type="button" className="btn btn-primary">Sign-up</button>
        </div>
      </div>
    </div>
  </nav>
 
  <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/AboutUs" element={<AboutUs/>} />
    <Route exact path="/Activity1" element={ <Activity1 condition={true} volume={10} />} />
    <Route exact path="/Counter" element={ <Counter />} />
    <Route exact path="/Card1" element={ <Card1 functions={[data, setData]} />} />
    <Route exact path="/GetEployee" element={ <GetEployee />} />
  </Routes>
</BrowserRouter>
      </>
    );
  }