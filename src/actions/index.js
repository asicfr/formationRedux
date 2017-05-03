/**
 * Constantes des actions
 */
export const ACTION_EXAMPLE = 'ACTION_EXAMPLE';
export const ACTION_FORM = 'FORM';
export const ACTION_FORM_CPT = 'ACTION_FORM_CPT';

/**
 * Action d'exemple
 */
export function exampleActionCreator(data) {
  return {
    type: ACTION_EXAMPLE,
    data
  };
}

/**
 * Action d'exemple
 */
export function formActionCreator(name, value) {
  return {
    type: ACTION_FORM,
    data : { [name]: value }
  };
}

/**
 * Action d'exemple
 */
export function formCptActionCreator() {
  return {
    type: ACTION_FORM_CPT
  };
}

