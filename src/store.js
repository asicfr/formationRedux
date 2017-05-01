import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducer from 'reducers';
import devTools from 'middlewares/dev-tools';

/**
 * Configuration du store Redux
 * @export fonction de configuration du store
 * @param {object} history 
 * @param {object} initialState 
 * @returns fonction de configuration du store
 */
export default (history, initialState) => {
	const routing = routerMiddleware(history);
	const enhancers = compose(
		applyMiddleware(thunk, routing),
		devTools
	);
	const store = createStore(reducer, initialState, enhancers);
	if (module.hot) {
		module.hot.accept('./reducers', () => {
			const nextRootReducer = require('./reducers/index').default;
			store.replaceReducer(nextRootReducer);
		});
	}
	return store;
};
