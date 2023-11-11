const actions = {
  SET_USERDATA: 'auth/SET_USERDATA',
  setUserData: userData => dispatch =>
    dispatch({
      type: actions.SET_USERDATA,
      userData,
    }),
};

export default actions;
