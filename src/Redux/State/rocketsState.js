import Axios from 'axios';

const GET_ROCKETS = 'bookStore/books/GET_ROCKETS';
const RESERVE_ROCKETS = 'bookStore/books/RESERVE_ROCKETS';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = () => async (dispatch) => {
  const response = await Axios.get(baseUrl);
  const obj = {};
  response.data.map((el) => {
    obj[el.id] = {
      information: el,
      reservation: false,
    };
    return obj;
  });

  dispatch({
    type: GET_ROCKETS,
    payload: obj,
  });
};

export const reserveRockets = (id) => (
  {
    type: RESERVE_ROCKETS,
    payload: id,
  }
);

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    case RESERVE_ROCKETS: {
      const newState = { ...state };
      newState[action.payload].reservation = !newState[action.payload].reservation;
      return newState; }

    default:
      return state;
  }
};

export default reducer;
