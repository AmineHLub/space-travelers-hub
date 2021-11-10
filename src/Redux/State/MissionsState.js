import Axios from 'axios';

const URL = 'https://api.spacexdata.com/v3/missions';
const GET_MISSIONS = 'spacetraveler/missions/GET_MISSIONS';
const JOIN_MISSION = 'spacetraveler/missions/JOIN_MISSION';

export const fetchMissions = () => async (dispatch) => {
  const response = await Axios.get(URL);
  const obj = {};
  response.data.map((mission) => {
    obj[mission.mission_id] = {
      information: mission,
      reservation: false,
    };
    return obj;
  });
  dispatch({
    type: GET_MISSIONS,
    payload: obj,
  });
};

export const reserveMissions = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    case JOIN_MISSION: {
      const newState = { ...state };
      newState[action.payload].reservation = !newState[action.payload].reservation;
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
