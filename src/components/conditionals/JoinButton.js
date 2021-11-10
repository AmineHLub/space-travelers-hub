import React from 'react';
import { useDispatch } from 'react-redux';
import { reserveMissions } from '../../Redux/State/MissionsState';

const JoinButton = (missionsObj) => {
  const { id } = missionsObj;
  const dispatch = useDispatch();
  const handleClick = (e) => {
    console.log('clicked', e.target.id);
    dispatch(reserveMissions(e.target.id));
  };
  return (
    <button
      id={id}
      type="button"
      onClick={(e) => handleClick(e)}
      className="joinMissionButton"
    >
      Join
    </button>
  );
};

export default JoinButton;
