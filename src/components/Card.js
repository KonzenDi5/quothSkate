import React from 'react';
import './estilos/estilosCard.css'
import image1 from './images/image1.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'
import image4 from './images/image4.png'
import image5 from './images/image5.png'
import image6 from './images/image6.png'
function Card() {
  return (
    <div className="cards">
      <div className="box">
        <img src={image1} />
      </div>
      <div className="box">
        <img src={image2} />
      </div>
      <div className="box">
        <img src={image3} />
      </div>
      <div className="box">
        <img src={image4} />
      </div>
      <div className="box">
        <img src={image5}/>
      </div>
      <div className="box">
        <img src={image6} />
      </div>
    </div>
  );
};

export default Card;
