import React from 'react';
import '../assets/styles/missions.css';

const Missions = (missionsObj) => {
  const { missions } = missionsObj;

  return (
    <>
      <h1>Missions</h1>
      <div className="missions">
        <table>
          <thead>
            <tr>
              <th className="tableHeader">Mission</th>
              <th className="tableHeader">Description</th>
              <th className="tableHeader">Status</th>
              <th className="tableHeader">This will be empty</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <tr key={mission.mission_id}>
                <td>
                  <h3>
                    {mission.mission_name}
                  </h3>
                </td>
                <td>{mission.description}</td>
                <td>
                  <span
                    className="notMember"
                  >
                    Not a member
                  </span>
                </td>
                <td className="joinButton">
                  <button
                    type="button"
                    className="joinButton"
                  >
                    Join
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Missions;
