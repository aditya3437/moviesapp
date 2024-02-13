import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    let uname = localStorage.getItem("username");
    if (uname) {
      uname = uname?.split("@")[0];
      setUsername(uname);
    }
  }, [username]);

  const Logout = ()=>{
    localStorage.clear("username");
    setUsername("");
  }
  return (
    <div>
      <header>
        <div className="container flexSB">
          <nav className="flexSB">
            <div className="logo">
              <img src="./Images/logo.png" alt="" />
            </div>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/series">Series</Link>
              <Link to="/movies">Movies</Link>
              <Link to="/contact">Contact</Link>
            </ul>
            <button className="toggle">
              <i className="fa fa-bars"></i>
            </button>
          </nav>
          <div className="account flexSB">
            <i className="fa fa-search"></i>
            <i className="fa fa-bell"></i>
            {!username ? (
              <Link to={"/signup"}>
                {" "}
                <i className="fa fa-user"></i>
              </Link>
            ) : (
              <h1 className="username-classed" onClick={Logout}>{username}</h1>
            )}
            <button>Subscribe Now</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
