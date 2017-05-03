import { connect } from 'react-redux';
import { formActionCreator, formCptActionCreator } from 'actions';
import OtherPage from './OtherPage.jsx';

/**
 * Connexion du composant au store redux
 * Réservez cette connexion a des composants de haut niveau
 */

// On map sur les props les donnees nécessaires au composant
const mapStateToProps = (state) => {
	const { errors, form } = state;
  return { errors, form };
};

// On map sur les props des fonctions nécessaires au composant
const mapDispatchToProps = (dispatch) => {
	return {
		formSave: (name, value) => {
      dispatch(formActionCreator(name, value));
      dispatch(formCptActionCreator());
    },
		dispatch
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(OtherPage);
