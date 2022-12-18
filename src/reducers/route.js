import { SET_ROUTE , REMOVE_ROUTE } from "../action";

const initialState = {
  coordinates: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ROUTE:
      return {
        ...state,
        coordinates: action.payload,
      };

    case REMOVE_ROUTE:
      return {
        ...state,
        coordinates: [],
      };

    default:
      return state;
  }
};

