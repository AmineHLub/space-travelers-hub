import React from 'react';

const Rockets = (rocketsObject) => {
  const { rockets } = rocketsObject;
  return (
    rockets.map((el) => (
      <div key={el.id}>
        <div>
          id :
          {' '}
          {el.id}
        </div>
        <div>
          name :
          {' '}
          {el.rocket_name}
        </div>
        <div>
          type :
          {' '}
          {el.rocket_type}
        </div>
        <span>img: </span>
        <img src={el.flickr_images} alt="img" />
      </div>
    ))
  );
};
export default Rockets;
