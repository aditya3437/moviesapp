import React from 'react'
import "./Signup.css";


const Signup = () => {
  return (
    <>
    <div className='signup-background'>
      <div className='signup_header'>
        <img src="Images/img/sign.jpg" alt='' />
      
      </div>
      <div className='signup_data'>
      <div className='signup_span'>
        <span>Sign In</span>
        </div>
        <form>
        <input type='text' placeholder='Email or Phone Number' required /> <br />
        <input type='password' placeholder='Password' required /><br />
        <button>Sign In</button>
        </form>
        <div className='signup_me'>
         
         <div className='checkbox'>   <input type='checkbox' placeholder='' /> <span>Remember me</span>
         <a href='https://www.netflix.com/in/login'>Need helps?</a></div>
      
         
        </div>
        </div>
    </div>
      
    </>
  )
}

export default Signup
