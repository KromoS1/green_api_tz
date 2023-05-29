import { memo, useContext } from 'react';
import { FooterChat, HeaderChat, ShowMessage } from '../../components';
import styles from './styles.module.css'
import { MyContext } from '../../provider';
import { getNumberPhone } from './lib';

export const Chat = memo(() => {

  const state = useContext(MyContext)

	return (
    <div className={styles.container_chat}>
      {state?.currentChatId 
      ? (
      <>
        <HeaderChat phone={getNumberPhone(state?.currentChatId)}/>
        <ShowMessage/>
        <FooterChat/>
      </>
      ) : (<></>)
    }
    </div>
  );
})