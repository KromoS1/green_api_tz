import { ChangeEvent, KeyboardEvent, memo, useState } from 'react';
import { useSendMessage } from './model';

export const SendMessage = memo(() => {

	const [message,setMessage] = useState<string>('')
	const send = useSendMessage()

	const change = (e: ChangeEvent<HTMLInputElement>) => {
		setMessage(e.currentTarget.value)
	}

	const sendMessage = () => {
		send(message);
		setMessage('')
	}

	const enter = (e: KeyboardEvent<HTMLInputElement>) => {
		if(e.key === 'Enter'){
			sendMessage()
		}
	}

	return (
    <div>
      <input
        type="text"
        value={message}
        onChange={change}
        placeholder="Введите текст"
        onKeyDown={enter}
      />
      <button onClick={sendMessage}>Отправить</button>
    </div>
  );
})