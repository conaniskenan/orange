/*
 * @Author: hypocrisy
 * @Date: 2021-05-17 15:25:50
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-19 14:33:40
 * @FilePath: /orange/src/store/reducer.js
 */
import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from 'pages/home/store'
export default combineReducers({
	home: headerReducer,
})
