import { ACTION_FORM, ACTION_FORM_CPT } from 'actions';
import { toString } from 'lodash';

/**
 * Reducer d'exemple
 */
export default function formReducer(state = { form : {}, cpt : 0 }, action) {
  switch (action.type) {
    case ACTION_FORM: {
      const fields = action.data;
      const formPart = Object.assign({}, state.form, fields);
      return Object.assign({}, state, { form : formPart });
    }
    case ACTION_FORM_CPT: {
      let result = Object.keys(state.form)
        .map(key => state.form[key])
        .filter(value => toString(value).length > 0).length;
      return Object.assign({}, state, { cpt : result });
    }
    default:
      return state;
  }
}
