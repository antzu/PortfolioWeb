import _ from 'lodash';
import {
  FETCH_CHAT_POSTS,
  CREATE_CHAT_POST,
  DELETE_CHAT_POST
} from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_CHAT_POSTS:
      return action.payload;
    case CREATE_CHAT_POST:
      return { ...state, ...action.payload };
    case DELETE_CHAT_POST:
      return _.omit(state, action.payload);
  }

  return state;
}