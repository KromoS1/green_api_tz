import { ActionTypes } from './actionTypes'
import { ActionsType } from './consts'
import { mainState } from './state'

export const mainReducer = (state = mainState, action: ActionTypes) => {
	switch (action.type) {

		case ActionsType.setDataGreenApi: {
			
			return {...state, ...action.payload}
		}

		case ActionsType.addChat: {
			return {
				...state, currentChatId: `${action.payload}@c.us`, 
				allMyChat: { ...state.allMyChat, [action.payload]: `${action.payload}@c.us` }, 
				messages: { ...state.messages, [`${action.payload}@c.us`]: [] }
			};
		}

		case ActionsType.setCurrentChatId: {

			return { ...state, currentId: action.payload }
		}

		case ActionsType.setMessage: {
			debugger

			return {...state, messages: {...state.messages, [state.currentChatId]: [...state.messages[state.currentChatId], action.payload]}}
		}

		default: 
			return state
	}
}