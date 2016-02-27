import { INCREMENT, DECREMENT } from '../actions';

const INITIAL_STATE = {
  count: 0
};

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case INCREMENT:
      return {...state, count: action.payload}
    case DECREMENT: {
      return {...state, count: action.payload}
    }
    default:
      return state
  }
}
