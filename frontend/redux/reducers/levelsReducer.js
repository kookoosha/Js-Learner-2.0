import {
  SET_LEVELS,
} from '../types';

export default function postsReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_LEVELS:
      return [...state, payload]; // payload === allLevels
    default:
      return state;
  }
}
