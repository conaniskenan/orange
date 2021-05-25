/*
 * @Author: hypocrisy
 * @Date: 2021-05-17 15:25:50
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-24 21:43:16
 * @FilePath: /orange/src/store/reducer.js
 */
import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from 'pages/home/store'
import { reducer as userReducer } from 'pages/user/store'

export default combineReducers({
	home: headerReducer,
	user: userReducer,
})
