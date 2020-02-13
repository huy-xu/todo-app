import { CHANGE_SIGN_IN_STATE } from '../../constants/action-types';

const initialState = {
  isSignIn: false
}

export const navigation = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SIGN_IN_STATE:
      return { ...state, isSignIn: !action.isSignIn }

    default:
      return state;
  }
}