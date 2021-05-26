/*
 * @Author: hypocrisy
 * @Date: 2021-05-16 23:16:39
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-26 18:26:51
 * @FilePath: /orange/src/api/index.js
 */
import axios from 'axios'

//axios.defaults.headers.post['Content-Type'] = 'application/json'
// axios.defaults.headers.common["token"] = localStorage.getItem("token")
axios.defaults.baseURL = process.env.REACT_APP_URL
axios.interceptors.request.use(
	config => {
		// * 判断是否存在token，如果存在的话，则每个http header都加上token
		// * token会在登录之后存储在本地
		if (localStorage.token) {
			config.headers['Authorization'] = `Bearer ${localStorage.token}`
		}
		return config
	},
	err => {
		return Promise.reject(err)
	}
)
const instance1 = axios.create({
	baseURL: process.env.REACT_APP_URL,
})
instance1.interceptors.request.use(
	config => {
		// * 判断是否存在token，如果存在的话，则每个http header都加上token
		// * token会在登录之后存储在本地
		if (localStorage.token) {
			config.headers['Authorization'] = `Bearer ${localStorage.token}`
		}
		return config
	},
	err => {
		return Promise.reject(err)
	}
)
instance1.interceptors.response.use(response => {
	// 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
	// 否则的话抛出错误
	if (response.status === 200) {
		if (response.data.code === 401) {
			localStorage.removeItem('token')
		}
		return Promise.resolve(response)
	} else {
		return Promise.reject(response)
	}
})
const instance2 = axios.create({
	baseURL: process.env.REACT_APP_URLP,
})
instance2.interceptors.request.use(
	config => {
		// * 判断是否存在token，如果存在的话，则每个http header都加上token
		// * token会在登录之后存储在本地
		if (localStorage.token) {
			config.headers['Authorization'] = `Bearer ${localStorage.token}`
		}
		return config
	},
	err => {
		return Promise.reject(err)
	}
)
export const get = (url, params = {}) => {
	return new Promise((resolve, reject) => {
		instance1
			.get(url, {
				params: params,
			})
			.then(res => {
				resolve(res.data)
			})
			.catch(err => {
				reject(err.data)
			})
	})
}
export const post = (url, params = {}) => {
	return new Promise((resolve, reject) => {
		instance1
			.post(url, params)
			.then(res => {
				resolve(res.data)
			})
			.catch(err => {
				reject(err.data)
			})
	})
}
export const getp = (url, params = {}) => {
	return new Promise((resolve, reject) => {
		instance2
			.get(url, {
				params: params,
			})
			.then(res => {
				resolve(res.data)
			})
			.catch(err => {
				reject(err.data)
			})
	})
}
export const postp = (url, params = {}) => {
	return new Promise((resolve, reject) => {
		instance2
			.post(url, params, {
				headers: { 'Content-Type': 'multipart/form-data' },
			})
			.then(res => {
				resolve(res.data)
			})
			.catch(err => {
				reject(err.data)
			})
	})
}
