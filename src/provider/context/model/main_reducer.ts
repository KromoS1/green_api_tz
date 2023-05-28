import { ActionTypes } from './actionTypes'
import { ActionsType } from './consts'
import { mainState } from './state'

export const mainReducer = (state = mainState, action: ActionTypes) => {
	switch (action.type) {

		case ActionsType.setDataGreenApi: {
			
			return {...state, ...action.payload}
		}

		default: 
			return state
	}
}