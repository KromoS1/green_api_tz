import { ChangeEvent, memo, useState, KeyboardEvent } from "react";
import styles from "./styles.module.css";
import { CustomInput, IconsChatFooter } from "../../UI";
import { useSendMessage } from "./model";

export const FooterChat = memo(() => {
  const send = useSendMessage();
  const [value, setValue] = useState("");

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const addMessage = () => {
    send(value);
    setValue("");
  };

  const enter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addMessage();
    }
  };

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
                  <svg height="24" width="24">
                    <use href="assets/main.svg#plane" />
                  </svg>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
});
