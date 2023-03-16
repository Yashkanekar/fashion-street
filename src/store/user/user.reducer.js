const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const initialState = {
  currentUser: null,
};
export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      return state;
    // every single reducer in redux recieves every single action dispatched
    //if no action matches in the user reducer then, the action is not meant to change the user reducer so by default if any action is not matching the user reducer then return the state value of the user reducer
    //only by returning the current state , redux knows that "oo okay this part of my reducer did not change" so it doesnt need to update
  }
};
