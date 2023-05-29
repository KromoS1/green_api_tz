import { MessageType } from '../types';
import { ActionsType } from './consts';

export const setDataGreenApi = (payload: {	idInstance: string | null, apiTokenInstance: string | null,}) => ({
	type: ActionsType.setDataGreenApi, payload
} as const)

export const setMessage = (message: MessageType) => ({type: ActionsType.setMessage, payload: message} as const)
export const setCurrentChatID = (chatID: string) => ({type: ActionsType.setCurrentChatId, payload: chatID} as const)
export const addChat = (chatID: string) => ({ type: ActionsType.addChat, payload: chatID } as const)