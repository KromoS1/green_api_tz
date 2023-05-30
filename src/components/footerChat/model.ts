import { useContext } from 'react';
import { MessageType, MyContext, MyDispatchContext, setMessage } from '../../provider';
import { instance } from '../../api/base';

export const useSendMessage = () => {
	const data = useContext(MyContext);
	const dispatch = useContext(MyDispatchContext);

	return (message: string) => instance.post(`/waInstance${data?.idInstance}/sendMessage/${data?.apiTokenInstance}`,{
		chatId: data?.currentChatId,
		message
	}).then(() => {

		const messageObj: MessageType = {
			type: 'you',
			text: message,
			timestamp: Date.now() / 1000
		}
		dispatch?.(setMessage(messageObj));
	})
}