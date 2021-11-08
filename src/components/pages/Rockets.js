import React from 'react';
import '../assets/styles/rocketspage.css';

const Rockets = (rocketsObject) => {
  const { rockets } = rocketsObject;
  return (
    <div className="rockets-container d-flex">
      {
    rockets.map((el) => (
      <div className="rocket-container d-flex" key={el.id}>
        <div className="img-container">
          <img src={el.flickr_images} alt="rocket-img" />
        </div>
        <div className="info-container d-flex">
          <span>{el.id}</span>
          <h2 className="rocket-name">{el.rocket_name}</h2>
          <h3 className="rocket-type">{el.rocket_type}</h3>
        </div>
      </div>
    ))
  }

    </div>
  );
};
export default Rockets;
