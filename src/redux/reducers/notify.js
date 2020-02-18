import {
  NOTIFY_ON,
  NOTIFY_OFF
} from '../../constants/action-types';

const initialState = {
  isShow: false,
  content: ''
}

export const notify = (state = initialState, action = {}) => {
  switch (action.type) {
    case NOTIFY_ON:
      return { ...state, isShow: true, content: action.content }

    case NOTIFY_OFF:
      return initialState;

    default:
      return state;
  }
}