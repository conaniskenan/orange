/*
 * @Author: hypocrisy
 * @Date: 2021-05-05 17:39:12
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-17 15:37:57
 * @FilePath: /orange/src/App.jsx
 */
import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import routes from './router'
import store from './store'

const App = memo(() => {
	return (
		<Provider store={store}>
			<BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
		</Provider>
	)
})

export default App
