import {
  NOTIFY_ON,
  NOTIFY_OFF
} from '../../constants/action-types';

export const notifyOn = (content) => ({
  type: NOTIFY_ON,
  content: content
});

export const notifyOff = () => ({
  type: NOTIFY_OFF
});