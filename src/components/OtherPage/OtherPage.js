import { connect } from 'react-redux';
import OtherPage from './OtherPage.jsx';

/**
 * Connexion du composant au store redux
 * Réservez cette connexion a des composants de haut niveau
 */

// On map sur les props les donnees nécessaires au composant
const mapStateToProps = (state) => {
	const { errors } = state;
  return { errors };
};

// On map sur les props des fonctions nécessaires au composant
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(OtherPage);
