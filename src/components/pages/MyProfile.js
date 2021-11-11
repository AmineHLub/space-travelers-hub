import React from 'react';
import '../assets/styles/profile.css';

export default function MyProfile(stateObject) {
  const { missions, rockets } = stateObject;
  const idsOfRockets = Object.keys(rockets);
  const resultOfRockets = idsOfRockets.filter((id) => rockets[id].reservation === true);
  const idsOfmissions = Object.keys(missions);
  const resultOfmissions = idsOfmissions.filter((id) => missions[id].reservation === true);
  return (
    <div className="profile-container">
      <section className="mymission-items">
        <h2>My Missions</h2>
        {resultOfmissions.length ? (
          <ul className="items-list">
            {resultOfmissions.map((joined) => {
              return (
                <li key={joined}>{missions[joined].information.mission_name}</li>
              );
            })}
          </ul>
        ) : null}
      </section>
      <section className="myrocket-items">
        <h2>My Rockets</h2>
        {resultOfRockets.length ? (
          <ul className="items-list">
            {resultOfRockets.map((reserved) => {
              return (
                <li key={reserved}>{rockets[reserved].information.rocket_name}</li>
              );
            })}
          </ul>
        ) : null}
      </section>
    </div>
  );
}
