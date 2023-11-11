import types from './actions';

const initialState = {
  userData: {},
  token: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_USERDATA:
      return {
        ...state,
        userData: action.userData,
      };
    default:
      return state;
  }
}
