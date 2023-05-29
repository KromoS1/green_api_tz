import { memo } from 'react';
import { SendMessage, ShowMessage } from '../../components';
import styles from './styles.module.css'

export const Chat = memo(() => {
	return (
    <div className={styles.container_chat}>
      <ShowMessage />
      <SendMessage />
    </div>
  );
})