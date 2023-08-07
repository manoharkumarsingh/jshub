import * as types from "../types";

const initialState = {
  data: [],
  selectedPost: {},
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POST:
      return {
        ...state,
        data: action.payload,
      };

    case types.SELECTED_POST:
      return {
        ...state,
        selectedPost: action.payload,
      };
    default:
      return state;
  }
};

export default blogReducer;
