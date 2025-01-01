import React from 'react'
import'./About.css';

const About = () => {
  const button=()=>{
     window.location.href="https://www.bing.com/ck/a?!&&p=f8cac0a2acd512ab3902eee48f0219eec12eeee661cd5cfead2be2d58a80836eJmltdHM9MTczNTM0NDAwMA&ptn=3&ver=2&hsh=4&fclid=235ba25b-ab8b-67db-377a-b67aaa5a66eb&psq=animal+care+images+wekipedia&u=a1aHR0cHM6Ly9jb21tb25zLndpa2ltZWRpYS5vcmcvd2lraS9DYXRlZ29yeTpBbmltYWxfY2FyZQ&ntb=1"
  }
  return (
    <div>
      <div className="about-us" id="about-us">
        <div className='head'>
          <h1> ABOUT ANIMAL CARE TRUST</h1>
        </div>
    <p>Welcome to <strong>animal care </strong>, your trusted partner in animal care and well-being.</p>
    <p>We are passionate about ensuring that every animal, big or small, receives the love, attention, and care they deserve. Our mission is to create a community where pet owners, animal lovers, and professionals come together to share knowledge, resources, and support for the welfare of animals.</p>
    <h2>Our Mission</h2>
    <ul>
      <li>Educate and empower pet owners with accurate and helpful information.</li>
      <li>Provide access to trusted resources for animal health, nutrition, and training.</li>
      <li>Advocate for animal rights and responsible ownership.</li>
    </ul>
    <h2>What We Offer</h2>
    <ul>
      <li><strong>Expert Advice:</strong> Comprehensive guides and articles on animal health, behavior, and nutrition.</li>
      <li><strong>Supportive Community:</strong> A platform to connect with fellow animal lovers and experts.</li>
      <li><strong>Resources:</strong> Recommendations for veterinarians, trainers, and animal care products.</li>
      <li><strong>Awareness:</strong> Tips on fostering, adopting, and supporting animals in need.</li>
    </ul>
    <h2>Our Vision</h2>
    <p>We envision a world where every animal is treated with compassion and care. By spreading awareness and providing tools to care for animals, we strive to make a difference in the lives of pets and their owners.</p>
    <p>Thank you for joining us on this journey. Together, we can build a happier and healthier future for all animals.</p>
    <button className="button1"onClick={button}> click for more</button>
  </div>
  <div className='sec'>
  <section id="services" className="services-section">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="card">
          <i className="fa-solid fa-graduation-cap"></i>
            <h3>We Educate</h3>
            <p>Sarvoham works to educate visitors in a more inclusive way of coexistence with animals and sensitizes them to the struggles of our community animals on the streets.</p>
          </div>
          <div className="card">
          <i className="fa-solid fa-house-medical"></i>
          
            <h3>We Cure</h3>
            <p>We have grown from a small act of charity with just 20 animals to an organization with more than 2500 animals helped so far, from a small room to a shelter with nearly 200 permanent resident dogs.</p>
          </div>
          <div className="card">
          <i className="fa-solid fa-handshake"></i>
            <h3>We Collaborate</h3>
            <p>Sarvoham actively participates in programs involving community & government initiatives like making roads safer for animals, street water bowls for animals and many more.</p>
          </div>
          <div className="card">
          <i className="fa-solid fa-bacteria" ></i>
            <h3>We Prevent</h3>
           
            <p>Sarvoham spays/ neuters and vaccinates against rabies, all the dogs we rescue. This helps in avoiding human-animal conflict arising due to rabies and overpopulation.</p>
          </div>
        </div>
      </section>
      </div>
  <footer>
    &copy; 2024 @animalcare.com. All rights reserved.
  </footer>
    </div>
  )
}

export default About
