import { ChangeEvent, memo, useState, KeyboardEvent } from 'react';
import styles from './styles.module.css'
import { CustomInput, IconsChatFooter } from '../../UI';
import { useSendMessage } from './model';

export const FooterChat = memo(() => {
  
  const send = useSendMessage();
  const [value, setValue] = useState('')

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const addMessage = () => {
    send(value);
    setValue("");
  }

  const enter = (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      addMessage();
    }
  }

	return (
    <div className={styles.container_footer}>
      <div className={styles.footer_area}>
        <div className={styles.footer_input_box}>
          <span>
            <div className={styles.footer}>
              <IconsChatFooter />
              <div className={styles.box_inputs}>
                <CustomInput
                  value={value}
                  placeholder={"Введите сообщение"}
                  callback={change}
                  callbackEnter={enter}
                />
                <div className={styles.icon_send} onClick={addMessage}>
                  <svg
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    preserveAspectRatio="xMidYMid meet"
                    version="1.1"
                    x="0px"
                    y="0px"
                    enable-background="new 0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
})