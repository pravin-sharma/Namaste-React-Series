import { useReducer } from 'react';
import UserContext from './userContext';
import UserReducer from './UserReducer';
import { SET_USER } from './userTypes';

export default (props) => {
  const initialState = {
    userName: 'default name',
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const setUserInfo = ({ userName }) => {
    dispatch({ type: SET_USER, payload: userName });
  };

  return (
    <UserContext.Provider
      value={{
        userName: state.userName,
        setUserInfo,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
