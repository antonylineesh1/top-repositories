import { SET_USERS,SET_USERS_PENDING } from "./dataActions";

const initialState = {
  users: [],
  users_pending: null,
  cities:['banglore','india']
};
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_PENDING:
      return {
        ...state,
        users_pending: action.payload
      };
    case SET_USERS:
      return { ...state, users: action.users };
  }
  return state;
};
export default dataReducer;
