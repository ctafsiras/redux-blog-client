import { SORT_POST } from "../actionTypes/actionTypes";

export const initialState = {
  latest: true
};

export const filterReducer = (state = initialState, action) => {
  if (action.type === SORT_POST) {
    return {
      ...state,
      latest: !state.latest
    }
  } else {
    return state
  }

};
