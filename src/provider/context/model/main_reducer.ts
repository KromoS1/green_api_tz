import { ActionTypes } from './actionTypes'
import { ActionsType } from './consts'
import { mainState } from './state'

export const mainReducer = (state = mainState, action: ActionTypes) => {
	switch (action.type) {

		case ActionsType.setDataGreenApi: {
			
			return {...state, ...action.payload}
		}

		case ActionsType.setCurrentChatId: {

			return { ...state, currentChatId: action.payload, messages: {...state.messages, [state.currentChatId]: []}};
		}

		case ActionsType.setMessage: {

			return {...state, messages: {...state.messages, [state.currentChatId]: [...state.messages[state.currentChatId], action.payload]}}
		}

		default: 
			return state
	}
}