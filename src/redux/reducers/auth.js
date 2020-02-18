import {
  AUTH_SUCCESS,
  AUTH_ERROR,
  SIGN_OUT
} from '../../constants/action-types';

const initialState = {
  authenticated: false,
  error: ''
}

export const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return { ...state, authenticated: true }

    case AUTH_ERROR:
      return { ...state, error: action.error }

    case SIGN_OUT:
      return initialState;

    default:
      return state;
  }
}