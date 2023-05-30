export const getNumberPhone = (chatId: string | undefined) => {
	
	return chatId ? chatId.split('@')[0] : ''
}