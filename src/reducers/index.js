import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import initialReducer from './initialReducer/initialReducer';
import exampleReducer from './exampleReducer/exampleReducer';

/**
 * Mise en commun de l'ensemble des reducers
 * Tout nouveau reducer doit dont y etre ajouté
 */
export default combineReducers({
  routing : routerReducer,
  contextGlobal : initialReducer,
  example : exampleReducer
});
