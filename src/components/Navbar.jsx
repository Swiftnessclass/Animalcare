import React from 'react';
import { useState } from 'react';
import logo from'.././assets/logo.PNG';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const[activeTab,setActiveTab]=useState('tab1');

  const handleActive=(tab)=>{
    setActiveTab(tab);
  };
  return (
   <header>
    <nav className="navbar">
    <img src={logo} alt="Logo" className="logo"></img>
    <ul>
   <li class={`tab ${activeTab ==='tab1' ? 'active': ''}`}onClick={()=>handleActive('tab1')} id="tab1"><Link to='/'>Home</Link></li> 
     <li class={`tab ${activeTab === 'tab2' ? 'active' : ''}`}onClick={()=>handleActive('tab2')}  id="tab2"><Link to='/About'>About</Link></li>
     <li class={`tab ${activeTab === 'tab3' ? 'active' : ''}`} onClick={()=>handleActive('tab3')}  id="tab3"><Link to='/Donation'>Donation</Link>
     </li>
     <li class={`tab ${activeTab === 'tab4' ? 'active' : ''}`} onClick={()=>handleActive('tab4')}  id="tab4"><Link to='/Adoption'>Adoption</Link>
     </li>
     <li  id="contact-item"  class={`tab ${activeTab === 'tab5' ? 'active' : ''}`} onClick={()=>handleActive('tab5')}  > <Link to='Contact'>Contact</Link></li>
    </ul>
    <button id="Login">Login</button>
  </nav>
   </header>
  )
}

export default Navbar
