import React from 'react';
import '../assets/styles/rocketspage.css';
import { useDispatch } from 'react-redux';
import { reserveRockets } from '../../Redux/State/rocketsState';

const Rockets = (rocketsObject) => {
  const dispatch = useDispatch();
  const { rockets } = rocketsObject;
  const arrOfIds = Object.keys(rockets);
  return (
    <div className="rockets-container d-flex">
      {
    arrOfIds.map((el) => {
      let message;
      return (
        <div className="rocket-container d-flex" key={rockets[el].information.id}>
          <div className="img-container">
            <img src={rockets[el].information.flickr_images} alt="rocket-img" />
          </div>
          <div className="info-container d-flex">
            <h2 className="rocket-name">{rockets[el].information.rocket_name}</h2>
            <p className="rocket-description">
              {rockets[el].reservation
                ? <span className="reserved-span">Reserved</span>
                : null}
              <span className="description-span">
                {rockets[el].information.description}
              </span>
            </p>
            <button
              type="button"
              className={rockets[el].reservation ? 'reserve-btn reserved' : 'reserve-btn'}
              onClick={() => dispatch(reserveRockets(el))}
            >
              {rockets[el].reservation ? 'Cancel reservation' : 'Reserve Rocket'}

            </button>
          </div>
        </div>
      );
    })
  }

    </div>
  );
};
export default Rockets;
