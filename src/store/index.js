/*
 * @Author: hypocrisy
 * @Date: 2021-05-17 15:25:50
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-17 15:30:13
 * @FilePath: /orange/src/store/index.js
 */
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const composeEnhancers =
	typeof window === 'object' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose

const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore(reducer, enhancer)
export default store
