import { ChangeEvent, memo, useContext, useState, KeyboardEvent, useCallback } from "react";
import { MyDispatchContext, addChat } from "../../provider";
import styles from "./styles.module.css";
import { CustomInput } from "../../UI";

export const SelectChat = memo(() => {
  
  const [value, setValue] = useState<string>("");

  const dispatch = useContext(MyDispatchContext);

  const change = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  },[])

  const enter = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch?.(addChat(value));
      setValue("");
    }
  },[value])

  return (
    <div className={styles.container_select_chat}>
      <CustomInput
        callback={change}
        callbackEnter={enter}
        value={value}
        placeholder={"Введите номер пользователя"}
      />
    </div>
  );
});
