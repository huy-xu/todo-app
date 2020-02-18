import { 
  AUTH_SUCCESS,
  AUTH_ERROR,
  SIGN_OUT
} from '../../constants/action-types';
import { firebaseAuth } from '../../firebase/firebase';

export const signUp = (user) => {
  return (dispatch) => {
    firebaseAuth.createUserWithEmailAndPassword(user.email, user.password)
      .then(() => dispatch({ type: AUTH_SUCCESS }))
      .catch(() => dispatch({ type: AUTH_ERROR }));
  }
};

export const signIn = (user) => {
  return (dispatch) => {
    firebaseAuth.signInWithEmailAndPassword(user.email, user.password)
      .then(() => dispatch({ type: AUTH_SUCCESS }))
      .catch(() => dispatch({ type: AUTH_ERROR }));
  }
}

export const signOut = () => {
  return (dispatch) => {
    firebaseAuth.signOut()
    .then(() => dispatch({ type: SIGN_OUT }));
  }
};

export const verifyAuth = () => {
  return (dispatch) => {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        dispatch({ type: AUTH_SUCCESS });
      } else {
        dispatch(signOut());
      }
    });
  }
};