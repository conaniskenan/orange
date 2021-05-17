import { constants } from './index'
import { fromJS } from 'immutable'

const initalState = fromJS({
	newsPlate: [],
})

const reducer = (state = initalState, action) => {
	switch (action.type) {
		case constants.GET_LIST:
			return state.set('newsPlate', action.value)
		default:
			return state
	}
}
export default reducer
