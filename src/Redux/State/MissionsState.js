import Axios from 'axios';

const URL = 'https://api.spacexdata.com/v3/missions';
const GET_MISSIONS = 'spacetraveler/missions/GET_MISSIONS';

export const fetchMissions = () => async (dispatch) => {
  const response = await Axios.get(URL);
  dispatch({
    type: GET_MISSIONS,
    payload: response.data,
  });
};

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
