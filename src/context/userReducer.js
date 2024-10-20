import { SET_USER } from './userTypes';

export default (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        userName: action.payload,
      };
    default:
      return {};
  }
};
