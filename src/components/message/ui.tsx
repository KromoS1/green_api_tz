import { memo, useContext} from 'react';
import { useLongPoll } from './model';
import { MyContext } from '../../provider';

export const ShowMessage = memo(() => {
	
	const state = useContext(MyContext);

	useLongPoll()

	const messages = state?.messages[state.currentChatId]?.map((message) => (
    <div>
      <div>{message.type == "you" ? "Вы" : message.nameUser}</div>
			<div>{message.text}</div>
    </div>
  ));

	return <div>{messages}</div>;
})