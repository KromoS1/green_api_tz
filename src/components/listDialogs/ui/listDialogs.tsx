import { memo, useContext } from 'react';
import styles from './styles.module.css'
import { MyContext, MyDispatchContext, setCurrentChatID } from '../../../provider';
import { Dialog } from './dialog';
import { getDataDialog } from '../lib';

export const ListDialogs = memo(() => {

	const state = useContext(MyContext)
	const dispatch = useContext(MyDispatchContext)

	const dialogsKeys = state ? Object.keys(state.allMyChat) : []

	const dialogsList = dialogsKeys.map((key) => {

		const {idChat, lastText, lastTimestamp} = getDataDialog(state, key);

		const selectChat = () => {
			dispatch?.(setCurrentChatID(idChat as string));
		}

		return (
      <Dialog
        isSelect={state?.allMyChat[key] === state?.currentChatId}
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