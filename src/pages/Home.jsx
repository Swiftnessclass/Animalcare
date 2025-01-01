import React from 'react'
import cat from '../assets/cat.jpeg';
import bird from '../assets/bird.jpg';
import rabbit from '../assets/rabbit.jpg';
import feed from '../assets/feed3.jpg';
import adopt from'../assets/adopt.jpg';
import vaccin from'../assets/vaccin.jpg';
import welfare from'../assets/welfare.jpg';
import './Home.css';
import Footer from './Footer';

const Home = () => {
  


 const knowMoreButton = () => {
  // Redirect to the specified link
  window.location.href = "https://www.animalcaretrustindia.org/";
};

const knowAboutUs=()=>{
 window.location.href="https://www.bing.com/ck/a?!&&p=d845210cd54b693a1cec439e3015a54574d084abf8d7abdea1b949bb3747fd32JmltdHM9MTczNTM0NDAwMA&ptn=3&ver=2&hsh=4&fclid=235ba25b-ab8b-67db-377a-b67aaa5a66eb&psq=about+animal+care+wekipedia&u=a1aHR0cHM6Ly9lbi53aWtpYm9va3Mub3JnL3dpa2kvQW5pbWFsX0NhcmUvQmFzaWNfY2FyZQ&ntb=1"
}
  
 



  return (
    <div>
      <div className="home" id="home">
      <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#ffffff" fill-opacity="1" 
          d="M0,96L48,106.7C96,117,192,139,288,144C384,149,480,139,576,138.7C672,139,768,149,864,165.3C960,181,1056,203,1152,213.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
  </svg>
    <div className="title">
      <h1>
        <span>P</span><span>a</span><span>w</span>&nbsp;
        <span>a</span><span>n</span><span>d</span>&nbsp;
        <span>C</span><span>l</span><span>a</span><span>w</span>&nbsp;
        <span>H</span><span>a</span><span>v</span><span>e</span><span>n</span>
      </h1>
    </div>
    

    <div className="rows">
      <div className="column-in">
        <img src={cat} id="images"></img>
        <div className="layer">
          <h3>Cat Care</h3>
          <p>Cats are independent but require attention and proper care. Find out about their feeding habits, playtime needs, and health checks.</p>
          <a href="https://www.bing.com/ck/a?!&&p=2834f1371d2734590ea221e2eb8a279fbec958a5f571694cb47e847a738f77bbJmltdHM9MTczNTM0NDAwMA&ptn=3&ver=2&hsh=4&fclid=235ba25b-ab8b-67db-377a-b67aaa5a66eb&psq=animal+care+wekipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQW5pbWFsX3dlbGZhcmU&ntb=1"><i className="fa-solid fa-arrow-up-right-from-square"></i> Learn More</a>
        </div>
      </div>
      <div className="column-in">
        <img src={bird} id="images"></img>
        <div className="layer">
          <h3>Bird Care</h3>
          <p>Birds need mental stimulation, proper diets, and regular health monitoring. Discover the essentials for caring for your feathered friends.</p>
          <a href="https://www.bing.com/ck/a?!&&p=2834f1371d2734590ea221e2eb8a279fbec958a5f571694cb47e847a738f77bbJmltdHM9MTczNTM0NDAwMA&ptn=3&ver=2&hsh=4&fclid=235ba25b-ab8b-67db-377a-b67aaa5a66eb&psq=animal+care+wekipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQW5pbWFsX3dlbGZhcmU&ntb=1"><i className="fa-solid fa-arrow-up-right-from-square"></i> Learn More</a>
        </div>
      </div>
      <div className="column-in">
        <img src={rabbit} id="images"></img>
        <div className="layer">
          <h3>Small Pets Care</h3>
          <p>Small pets like rabbits, hamsters, and guinea pigs require unique care. Learn how to create a comfortable habitat and maintain their health.</p>
          <a href="https://www.bing.com/ck/a?!&&p=2834f1371d2734590ea221e2eb8a279fbec958a5f571694cb47e847a738f77bbJmltdHM9MTczNTM0NDAwMA&ptn=3&ver=2&hsh=4&fclid=235ba25b-ab8b-67db-377a-b67aaa5a66eb&psq=animal+care+wekipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQW5pbWFsX3dlbGZhcmU&ntb=1"><i className="fa-solid fa-arrow-up-right-from-square"></i> Learn More</a>
        </div>
      </div>
      <div className="column-in">
        <img src={feed} id="images"></img>
        <div className="layer">
          <h3>Dog Care</h3>
          <p>Taking care of your dog is more than just feeding them. It involves understanding their needs and ensuring they are physically and mentally healthy. Here's a guide to dog care:</p>
          <a href="https://www.bing.com/ck/a?!&&p=2834f1371d2734590ea221e2eb8a279fbec958a5f571694cb47e847a738f77bbJmltdHM9MTczNTM0NDAwMA&ptn=3&ver=2&hsh=4&fclid=235ba25b-ab8b-67db-377a-b67aaa5a66eb&psq=animal+care+wekipedia&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQW5pbWFsX3dlbGZhcmU&ntb=1"><i className="fa-solid fa-arrow-up-right-from-square"></i> Learn More</a>
        </div>
      </div>
    </div>
    <div className="button">
      <button id="about-us"onClick={ knowMoreButton }>ABOUT US</button>
      <button id="know-more"onClick={knowAboutUs}>KNOW MORE</button>
  </div>
  <section id="services" className="services-section1">
        <h2>Our Services</h2>
        <div className="service-cards1">
          <div className="card1">
            <h3>Pet Adoption</h3>
            <p>Find your perfect pet companion today!</p>
          </div>
          <div className="card1">
            <h3>Veterinary Care</h3>
            <p>We provide expert veterinary services for your pets.</p>
          </div>
          <div className="card1">
            <h3>Pet Grooming</h3>
            <p>Professional grooming services to keep your pets looking their best.</p>
          </div>
        </div>
      </section>
      <div className="container1">
    <h1>Upcoming Community Events</h1>
    <div className="events-grid">
    
      <div class="event-card">
        <img src={adopt} alt="Adoption Drive" className="event-image"/>
        <div className="event-content">
          <h2 className="event-title">Adoption Drive</h2>
          <p className="event-date">Date: January 15, 2025</p>
          <p className="event-description">Join us for a special adoption drive to find loving homes for our furry friends.</p>
          <a href="#" className="register-btn">Register Now</a>
        </div>
      </div>

     
      <div className="event-card">
        <img src={vaccin} alt="Vaccination Camp" className="event-image"/>
        <div className="event-content">
          <h2 className="event-title">Vaccination Camp</h2>
          <p className="event-date">Date: February 10, 2025</p>
          <p className="event-description">Free vaccination camp for pets to ensure their health and safety.</p>
          <a href="#" className="register-btn">Register Now</a>
        </div>
      </div>

      
      <div class="event-card">
        <img src={welfare} alt="Awareness Program" className="event-image"/>
        <div className="event-content">
          <h2 className="event-title">Animal Welfare Awareness Program</h2>
          <p className="event-date">Date: March 5, 2025</p>
          <p className="event-description">Learn about animal welfare and how you can contribute to making a difference.</p>
          <a href="#" class="register-btn">Register Now</a>
        </div>
      </div>
    </div>
  </div>
  <div className='footer'>
     <Footer></Footer>
  </div>
 
  </div>
    </div>
  )
}

export default Home
