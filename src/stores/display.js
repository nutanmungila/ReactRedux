import { INPUT_CHANGED } from '../constants/ActionTypes';

var initialState = {
	text:""
}

export default function display(state = initialState, action) {
  switch (action.type) {
  case INPUT_CHANGED:
    return this.state.text;

  default:
    return state;
  }
}
