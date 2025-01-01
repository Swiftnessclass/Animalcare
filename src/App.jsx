import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Donation from './pages/Donation';
import Adoption from './pages/Adoption';
import { Routes,Route } from 'react-router-dom';
import Contact from './pages/Contact';


const App = () => {
  return (
   
   <div >
      <Navbar></Navbar>
      <div className='container'>
      <Routes>
        <Route path='/'element={<Home></Home>}/>
        <Route path='About'element={<About></About>}/>
        <Route path='Donation'element={<Donation></Donation>}/>
        <Route path='Adoption'element={<Adoption></Adoption>}/>
        <Route path='Contact'element={<Contact></Contact>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App;
