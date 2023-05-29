import { memo } from 'react';
import { SendMessage, ShowMessage } from '../../components';

export const Chat = memo(() => {
	return <div>
		<ShowMessage/>
		<SendMessage/>
	</div>
})