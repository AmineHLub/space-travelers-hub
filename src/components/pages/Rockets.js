import React from 'react';
import '../assets/styles/rocketspage.css';
import { useDispatch } from 'react-redux';

const Rockets = (rocketsObject) => {
  const dispatch = useDispatch();
  const { rockets } = rocketsObject;
  const arrOfIds = Object.keys(rockets);
  return (
    <div className="rockets-container d-flex">
      {
    arrOfIds.map((el) => (
      <div className="rocket-container d-flex" key={rockets[el].information.id}>
        <div className="img-container">
          <img src={rockets[el].information.flickr_images} alt="rocket-img" />
        </div>
        <div className="info-container d-flex">
          <span>{rockets[el].information.id}</span>
          <h2 className="rocket-name">{rockets[el].information.rocket_name}</h2>
          <h3 className="rocket-type">{rockets[el].information.rocket_type}</h3>
          <button
            type="button"
            className="reserve-btn"
            onClick={() => dispatch(el)}
          >
            Reserve Rocket

          </button>
        </div>
      </div>
    ))
  }

    </div>
  );
};
export default Rockets;
