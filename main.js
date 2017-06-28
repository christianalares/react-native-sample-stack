import Expo from 'expo';
import React from 'react';

import reducers from './src/reducers/'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'

import App from './src/components/App/App'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)
const store = createStoreWithMiddleware(reducers)

class Main extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<App />
			</Provider>
		)
	}
}

Expo.registerRootComponent(Main);
