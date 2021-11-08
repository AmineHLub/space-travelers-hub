import Axios from 'axios';

const GET_ROCKETS = 'bookStore/books/GET_ROCKETS';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = () => async (dispatch) => {
  const response = await Axios.get(baseUrl);
  dispatch({
    type: GET_ROCKETS,
    payload: response.data,
  });
};

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
