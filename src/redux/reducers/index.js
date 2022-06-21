import { combineReducers } from 'redux';
import uiLogin from './uiLogin';


import { CLEAR_ALL_STATES } from '../actions';

const reducer = combineReducers({
  uiLogin,
});

export default (state, action) => {
  let oldState = state;
  if (action.type === CLEAR_ALL_STATES) {
    oldState = undefined;
  }
  return reducer(oldState, action);
};
