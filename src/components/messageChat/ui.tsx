import { memo, useContext} from 'react';
import { useLongPoll } from './model';
import { MyContext } from '../../provider';
import styles from './styles.module.css'
import { MyMessage } from './typeMessage/myMessage';
import { UserMessage } from './typeMessage/userMessage';

export const ShowMessage = memo(() => {
	
	const state = useContext(MyContext);

	useLongPoll()

	const messages = state?.messages[state.currentChatId]?.map((message) => {

		const time = new Intl.DateTimeFormat('ru-RU', {hour:'numeric', minute: 'numeric'}).format(message.timestamp)

		return (
      <>
        {message.type == "you" ? (
          <MyMessage text={message.text} time={time} />
        ) : (
          <UserMessage text={message.text} time={time} />
        )}
      </>
    );
	})

	return <div className={styles.container_chat_list}>
		<div className={styles.box_list}>
			<div className={styles.list}>
				{messages}
			</div>
		</div>
	</div>;
})