/**
 * Constantes des actions
 */
export const ACTION_EXAMPLE = 'ACTION_EXAMPLE';

/**
 * Action d'exemple
 */
export function exampleActionCreator(data) {
  return dispatch => dispatch({
    type: ACTION_EXAMPLE,
    data
  });
}

