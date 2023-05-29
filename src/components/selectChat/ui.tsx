import { ChangeEvent, memo, useContext, useState, KeyboardEvent } from "react";
import { MyDispatchContext, setCurrentChatID } from "../../provider";
import styles from './styles.module.css'

export const SelectChat = memo(() => {
  const [value, setValue] = useState<string>("");
  const dispatch = useContext(MyDispatchContext);

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const enter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch?.(setCurrentChatID(value));
      setValue('')
    }
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="Введите номер пользователя"
        onChange={change}
        onKeyDown={enter}
      />
    </div>
  );
});
