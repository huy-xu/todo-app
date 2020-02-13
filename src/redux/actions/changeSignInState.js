import { 
  CHANGE_SIGN_IN_STATE
} from '../../constants/action-types';

export const changeSignInState = (isSignIn) => ({
  type: CHANGE_SIGN_IN_STATE,
  isSignIn
});
