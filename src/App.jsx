/*
 * @Author: hypocrisy
 * @Date: 2021-05-05 17:39:12
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-16 23:39:04
 * @FilePath: /orange/src/App.jsx
 */
import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import routes from './router'

const App = memo(() => {
	return <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
})

export default App
