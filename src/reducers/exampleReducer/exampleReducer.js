import { ACTION_EXAMPLE } from 'actions';

/**
 * Reducer d'exemple
 */
export default function exampleReducer(state = { data : 'vide' }, action) {
  switch (action.type) {
    case ACTION_EXAMPLE:
      return Object.assign({}, state, { data : action.data });
    default:
      return state;
  }
}
