import React from 'react';
import JoinButton from '../conditionals/JoinButton';
import '../assets/styles/missions.css';

const Missions = (missionsObj) => {
  const { missions } = missionsObj;
  const missionsIds = Object.keys(missions);

  return (
    <>
      <h1>Missions</h1>
      <div className="missions">
        <table>
          <thead key="1">
            <tr>
              <th className="tableHeader">Mission</th>
              <th className="tableHeader">Description</th>
              <th className="tableHeader">Status</th>
              <th className="tableHeader">This will be empty</th>
            </tr>
          </thead>
          <tbody>
            {missionsIds.map((id) => missions[id]).map((mission) => (
              <tr key={mission.information.mission_id}>
                <td>
                  <h3>
                    {mission.information.mission_name}
                  </h3>
                </td>
                <td>
                  {mission.information.description}
                </td>
                <td>
                  <span
                    className="notMember"
                  >
                    Not a member
                  </span>
                </td>
                <td className="joinMission">
                  <JoinButton missions={missionsObj} id={mission.information.mission_id} />
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
