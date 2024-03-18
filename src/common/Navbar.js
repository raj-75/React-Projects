import React from "react";
export default function Navbar() {
    return (
      <>
      <header>
    <div className="px-3 py-2 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
           test
          </a>

          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="/" className="nav-link text-secondary">
                
                Home
              </a>
            </li>
            <li>
              <a href="/" className="nav-link text-white">
                
                Dashboard
              </a>
            </li>
            <li>
              <a href="/" className="nav-link text-white">
                
                Orders
              </a>
            </li>
            <li>
              <a href="/" className="nav-link text-white">
                
                Products
              </a>
            </li>
            <li>
              <a href="/" className="nav-link text-white">
                
                Customers
              </a>
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
  </header>
      </>
    );
  }