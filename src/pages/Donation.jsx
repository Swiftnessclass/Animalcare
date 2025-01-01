import React from 'react';
import QR from '../assets/QR1.jpg';
import'./Donation.css';

const Donation = () => {
  return (
    
       <div className="donation" id="donation">
        
        <div className='ver-head'>
        <h1>DONATION</h1>
    <h1 className="vertical-heading">
      Join Us in Creating a Brighter Future for<br/>
      Animals in Need Through Your<br/>
      Generous Contributions<br/>
      Every Life Matters: Help Us Provide<br/>
      Shelter, Care, and Love to Vulnerable Animals
    </h1></div>
    <div className="button-container">
      <img src={QR} alt="QR code" className="QR"/>
      <p className="para">Donate here:<br/>
        Name: Animal Care Trust<br/>
        Acct #: 4782500101513801<br/>
        IFSC Code: KARB0000478<br/>
        UPI ID : 9845255777@kbl (It is not Phone Number or Gpay number)</p>
    </div>
    <div className="form-container">
      <h2>Donation Form</h2>
      <form id="donationForm">
        <label for="firstname">First Name</label>
        <input type="text" id="firstname" name="firstname" placeholder="Your first name" required/>

        <label for="lastname">Last Name</label>
        <input type="text" id="lastname" name="lastname" placeholder="Your last name" required/>

        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your email address" required/>

        <label for="amount">Amount (₹)</label>
        <input type="number" id="amount" name="amount" placeholder="Enter amount" required/>

        <label for="phonenumber">Phone Number</label>
        <input type="tel" id="phonenumber" name="phonenumber" placeholder="Your phone number" required/>

        <button type="submit" className="submit-button">Donate</button>
      </form>
    </div>
    </div>
  )
}

export default Donation
