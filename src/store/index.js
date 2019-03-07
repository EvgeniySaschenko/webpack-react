import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import nav from './nav';
import btnToggle from './btnToggle';
import search from './search';


let reducers= combineReducers({
	routing: routerReducer,
	nav_header: nav.hrader,
	btnToggle_listEventsFree: btnToggle.listEventsFree,
	search: search
});

let store= createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;