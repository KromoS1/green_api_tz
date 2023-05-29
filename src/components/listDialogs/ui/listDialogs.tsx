import { memo, useContext } from 'react';
import styles from './styles.module.css'
import { MessageType, MyContext, MyDispatchContext, setCurrentChatID } from '../../../provider';
import { Dialog } from './dialog';

export const ListDialogs = memo(() => {

	const state = useContext(MyContext)
	const dispatch = useContext(MyDispatchContext)

	const dialogsKeys = state ? Object.keys(state.allMyChat) : []

	const dialogsList = dialogsKeys.map((key, i) => {

		const idChat = state?.allMyChat[key];
		const messageList = state?.messages[idChat as string] as MessageType[];
		const lastMessage = messageList[messageList.length - 1] 

		const lastText = lastMessage?.text ?? '';
		const lastTimestamp = lastMessage?.timestamp ?? Date.now()

		const selectChat = () => {
			dispatch?.(setCurrentChatID(idChat as string));
		}

		return (
      <Dialog
        phone={key}
        callback={selectChat}
        lastMessage={lastText}
        time={lastTimestamp}
      />
    );
	});

	return (
    <div className={styles.container_dialog_list}>
      <div className={styles.list_chats}>{dialogsList}</div>
    </div>
  );
})