import React from 'react'
import'./Contact.css';

const Contact = () => {
  return (
  
      <div id="contact1" className="contact-section hidden">
      <div className="contact">
        <div className="row">
          <div className="contact-left">
            <h2 className="sub-title">CONTACT US!</h2>
           <p> <a href="mailto:animalcare@gmail.com"/>
            <i className="fa-solid fa-envelope"style={{color: "#000000" }}></i>animalcare@gmail.com</p>
            <p>
            <a href="tel:+918217580842"/>
            <i className="fa-solid fa-phone" style={{color: "#000000" }}></i> 8217580842</p>
            <div className="contact-icon">
              <a href="https://wa.me/+918217580842" target="_blank"><i className="fa-brands fa-whatsapp" style={{color: "#000000" }}></i></a>
              <a href="https://facebook.com/animalcaretrust" target="_blank"><i className="fa-brands fa-facebook icon" style={{color: "#000000" }}></i></a>
              <a href="https://instagram.com/animalcaretrust"><i className="fa-brands fa-instagram icon" style={{color: "#000000" }}></i></a>
              <a href="https://www.youtube.com/@actmangalore"> <i className="fa-brands fa-youtube" style={{color:"#000000"}}></i></a>
            </div>
            <a href="downloadcv.pdf" className="but2" download>Download CV</a>
          </div>
          <div className="contact-right">
            <form action="https://api.web3forms.com/submit" method="POST">
             <input type="hidden" name="access_key" value="d629bc82-89f9-47de-9177-58904ca61760"/>
              <input type="text" name="Name" placeholder="your name" required/>
              <input type="text" name="Email" placeholder="your email" required/>
              <textarea name="Message" rows="6" placeholder="your message" required></textarea>
              <button type="submit" className="but2">submit</button>
            </form>
            <div className="bla">
              <a href="https://instagram.com/animalcaretrust">
                <ion-icon name="logo-instagram"></ion-icon>@animalcaretrust
              </a>
            </div>
            <div className="bla">
              <a href="https://www.youtube.com/@actmangalore">
               <i className="fa-brands fa-youtube"></i>animalcaretrust
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default Contact
