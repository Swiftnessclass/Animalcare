import React from 'react';
import'./Adoption.css';
import cooper from '../assets/cooper.jpg';
import groom from '../assets/groom.jpg';
import grover from '../assets/grover.png';
import Sunny from '../assets/Sunny.png';
import sarah from '../assets/sarah.png';
import jade from '../assets/jade.png';
import maggie from '../assets/maggie.jpg';
import paris from '../assets/paris.png';
import cat11 from '../assets/cat11.jpg';
import cat4 from '../assets/cat4.jpg';
import cat3 from '../assets/cat3.jpg';
import cat2 from '../assets/cat2.jpg';
import cat5 from '../assets/cat5.jpg';
import cat6 from '../assets/cat6.jpg';
import cat7 from '../assets/cat7.jpg';
import cat8 from '../assets/cat8.jpg';

const Adoption = () => {
  return (
    <div className="adoption" id="adoption">
      <h1>
        <span>E</span><span>V</span><span>E</span><span>R</span><span>Y</span>&nbsp;
        <span>P</span><span>E</span><span>T</span>&nbsp;
        <span>D</span><span>E</span><span>S</span><span>E</span><span>R</span><span>V</span><span>E</span><span>S</span>&nbsp;
        <span>A</span>&nbsp;
        <span>L</span><span>O</span><span>V</span><span>I</span><span>N</span><span>G</span>&nbsp;
        <span>H</span><span>O</span><span>M</span><span>E</span>
        <br />
        <span>A</span><span>D</span><span>O</span><span>P</span><span>T</span>&nbsp;
        <span>A</span>&nbsp;
        <span>P</span><span>E</span><span>T</span>&nbsp;
        <span>T</span><span>O</span><span>D</span><span>A</span><span>Y</span>
      </h1>
      <h2 className='cat'>DOGS FOR ADOPTION</h2>
      <div className="rows">
        <div className="column-out">
          <img src={cooper} alt="Cooper" className="images" />
          <div className="layer">
            <h3>Cat Care</h3>
            <p>Cats are independent but require attention and proper care. Find out about their feeding habits, playtime needs, and health checks.</p>
            <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i> Learn More</a>
          </div>
        </div>
        <div className="column-out">
          <img src={groom} alt="Groom" className="images" />
          <div className="layer">
            <h3>Bird Care</h3>
            <p>Birds need mental stimulation, proper diets, and regular health monitoring. Discover the essentials for caring for your feathered friends.</p>
            <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i> Learn More</a>
          </div>
        </div>
        <div className="column-out">
          <img src={grover} alt="Grover" className="images" />
          <div className="layer">
            <h3>Small Pets Care</h3>
            <p>Small pets like rabbits, hamsters, and guinea pigs require unique care. Learn how to create a comfortable habitat and maintain their health.</p>
            <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i> Learn More</a>
          </div>
        </div>
        <div className="column-out">
          <img src={Sunny}alt="Sunny" className="images" />
          <div className="layer">
            <h3>Dog Care</h3>
            <p>Taking care of your dog is more than just feeding them. It involves understanding their needs and ensuring they are physically and mentally healthy. Here's a guide to dog care:</p>
            <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i> Learn More</a>
          </div>
        </div>
      </div>

      <div className="rows">
        <div className="column-out">
          <img src={sarah} alt="Cooper" className="images" />
          <div className="layer">
            <h3>Cat Care</h3>
            <p>Cats are independent but require attention and proper care. Find out about their feeding habits, playtime needs, and health checks.</p>
            <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i> Learn More</a>
          </div>
        </div>
        <div className="column-out">
          <img src={paris} alt="Groom" className="images" />
          <div className="layer">
            <h3>Bird Care</h3>
            <p>Birds need mental stimulation, proper diets, and regular health monitoring. Discover the essentials for caring for your feathered friends.</p>
            <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i> Learn More</a>
          </div>
        </div>
        <div className="column-out">
          <img src={jade} alt="Grover" className="images" />
          <div className="layer">
            <h3>Small Pets Care</h3>
            <p>Small pets like rabbits, hamsters, and guinea pigs require unique care. Learn how to create a comfortable habitat and maintain their health.</p>
            <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i> Learn More</a>
          </div>
        </div>
        <div className="column-out">
          <img src={maggie}alt="Sunny" className="images" />
          <div className="layer">
            <h3>Dog Care</h3>
            <p>Taking care of your dog is more than just feeding them. It involves understanding their needs and ensuring they are physically and mentally healthy. Here's a guide to dog care:</p>
            <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i> Learn More</a>
          </div>
        </div>
      </div>

      <h2 className='cat'>CATS FOR ADOPTION</h2>
      <div className="rows">
        <div className="column-out">
          <img src={cat11} alt="Cat 11" className="images" />
          <div className="layer">
            <h3>Cat Care</h3>
            <p>Cats are independent but require attention and proper care. Find out about their feeding habits, playtime needs, and health checks.</p>
            <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i> Learn More</a>
          </div>
        </div>
        <div className="column-out">
          <img src={cat4} alt="Cat 4" className="images" />
          <div className="layer">
            <h3>Bird Care</h3>
            <p>Birds need mental stimulation, proper diets, and regular health monitoring. Discover the essentials for caring for your feathered friends.</p>
            <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i> Learn More</a>
          </div>
        </div>
        <div className="column-out">
          <img src={cat2} alt="Cat 2" className="images" />
          <div className="layer">
            <h3>Small Pets Care</h3>
            <p>Small pets like rabbits, hamsters, and guinea pigs require unique care. Learn how to create a comfortable habitat and maintain their health.</p>
            <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i> Learn More</a>
          </div>
        </div>
        <div className="column-out">
          <img src={cat3} alt="Cat 3" className="images" />
          <div className="layer">
            <h3>Dog Care</h3>
            <p>Taking care of your dog is more than just feeding them. It involves understanding their needs and ensuring they are physically and mentally healthy. Here's a guide to dog care:</p>
            <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i> Learn More</a>
          </div>
        </div>
      </div>

      <div className="rows">
        <div className="column-out">
          <img src={cat5} alt="Cat 11" className="images" />
          <div className="layer">
            <h3>Cat Care</h3>
            <p>Cats are independent but require attention and proper care. Find out about their feeding habits, playtime needs, and health checks.</p>
            <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i> Learn More</a>
          </div>
        </div>
        <div className="column-out">
          <img src={cat6} alt="Cat 4" className="images" />
          <div className="layer">
            <h3>Bird Care</h3>
            <p>Birds need mental stimulation, proper diets, and regular health monitoring. Discover the essentials for caring for your feathered friends.</p>
            <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i> Learn More</a>
          </div>
        </div>
        <div className="column-out">
          <img src={cat7} alt="Cat 2" className="images" />
          <div className="layer">
            <h3>Small Pets Care</h3>
            <p>Small pets like rabbits, hamsters, and guinea pigs require unique care. Learn how to create a comfortable habitat and maintain their health.</p>
            <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i> Learn More</a>
          </div>
        </div>
        <div className="column-out">
          <img src={cat8} alt="Cat 3" className="images" />
          <div className="layer">
            <h3>Dog Care</h3>
            <p>Taking care of your dog is more than just feeding them. It involves understanding their needs and ensuring they are physically and mentally healthy. Here's a guide to dog care:</p>
            <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i> Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adoption;
