import React, { useEffect, useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router";

const Signup = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [pwd, setPwd] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (true) {
      localStorage.setItem("username", username);
      console.log(username);
      navigate("/");
    } else return;
  };

  useEffect(() => {
    let username = localStorage.getItem("username");
    if (username) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className="signup-background">
        <div className="signup_header">
          <img src="Images/img/sign.jpg" alt="" />
        </div>
        <div className="signup_data">
          <div className="signup_span">
            <span>Sign In</span>
          </div>
          <form onSubmit={submitHandler}>
            <input
              type="email"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Email or Phone Number"
              required
            />{" "}
            <br />
            <input
              type="password"
              onChange={(e) => setPwd(e.target.value)}
              placeholder="Password"
              required
            />
            <br />
            <button>Sign In</button>
          </form>
          <div className="signup_me">
            <div className="checkbox">
              {" "}
              <input type="checkbox" placeholder="" /> <span>Remember me</span>
              <a href="https://www.netflix.com/in/login">Need helps?</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
