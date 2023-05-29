import { ChangeEvent, memo, useContext, useState, KeyboardEvent } from "react";
import { MyDispatchContext, addChat, setCurrentChatID } from "../../provider";
import styles from './styles.module.css'

export const SelectChat = memo(() => {
  const [value, setValue] = useState<string>("");
  const dispatch = useContext(MyDispatchContext);

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const enter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch?.(addChat(value));
      setValue('')
    }
  };

  return (
    <div className={styles.container_select_chat}>
      <div className={styles.box_select_chat}>
        <input
          type="text"
          value={value}
          placeholder="Введите номер пользователя"
          onChange={change}
          onKeyDown={enter}
          className={styles.input}
        />
      </div>
    </div>
  );
});
