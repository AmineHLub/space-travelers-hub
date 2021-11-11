import React from 'react';
import { useDispatch } from 'react-redux';
import { reserveMissions } from '../../Redux/State/MissionsState';
import '../assets/styles/missions.css';

const Missions = (missionsObj) => {
  const dispatch = useDispatch();
  const { missions } = missionsObj;
  const handleClick = (e) => {
    dispatch(reserveMissions(e.target.id));
  };
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
                    className="member"
                  >
                    {mission.reservation ? 'Active Member' : 'NOT A MEMBER'}
                  </span>
                </td>
                <td className="joinMission">
                  <button
                    className="joinMissionButton"
                    id={mission.information.mission_id}
                    onClick={(e) => handleClick(e)}
                    type="button"
                  >
                    {mission.reservation ? 'Leave Mission' : 'Join Mission'}
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
