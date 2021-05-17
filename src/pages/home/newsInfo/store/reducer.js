import { constants } from './index'
import { fromJS } from 'immutable'

const initalState = fromJS({
	newsRanList: [],
})

const reducer = (state = initalState, action) => {
	switch (action.type) {
		case constants.GET_LIST:
			return state.set('newsRanList', action.value)
		default:
			return state
	}
}
export default reducer
