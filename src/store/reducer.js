/*
 * @Author: hypocrisy
 * @Date: 2021-05-17 15:25:50
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-17 22:40:35
 * @FilePath: /orange/src/store/reducer.js
 */
import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from 'pages/home/header/store'
import { reducer as newsInfoReducer } from 'pages/home/newsInfo/store'

export default combineReducers({
	header: headerReducer,
	newsInfo: newsInfoReducer,
})
