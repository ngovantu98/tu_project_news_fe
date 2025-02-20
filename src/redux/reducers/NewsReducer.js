import * as types from "../constants";

const initialState = {
  news: []
  
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {
    case types.LIST_NEWS:
      return {
        ...state,
        news: actions.payload
      };
    default:
      return state;
  }
}