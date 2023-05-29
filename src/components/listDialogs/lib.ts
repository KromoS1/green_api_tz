import { AppStateType, MessageType } from '../../provider';

export const getDataDialog = (state: AppStateType | null, key: string) => {

	const idChat = state?.allMyChat[key];
	const messageList = state?.messages[idChat as string] as MessageType[];
	const lastMessage = messageList[messageList.length - 1] 

	return {
		idChat,
		lastText: lastMessage?.text ?? '',
		lastTimestamp: lastMessage?.timestamp ?? Date.now()
	}
}