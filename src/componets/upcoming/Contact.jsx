import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <>
    <div className='contact_page'>
      <div className='contact_data'>
        <h2>Contact us</h2>
        <div className='contact_text'>
        <span>Tell us more and we'll find the best solution for you</span><br />
        <input type='text' placeholder='Describe your issues' />
        
        <div className='contact_quick'>
          <h4>Quick Links</h4>
          <div className='contact_an'>
          <a href='/' >Reset password</a><hr />
          <a href='/' >Update email</a><hr />
          <a href='/' >Get help signing in</a><hr />
          <a href='/' >Update payment method</a><hr />
          <a href='/' >Request Tv shows or movies</a><hr />
          <a href='/' >Content Grivances in india</a>
          </div>
         
         </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Contact
