import { ChangeEvent, FC, memo, KeyboardEvent } from "react";
import styles from "./styles.module.css";

type PropsType = {
  placeholder: string;
  value: string;
  callback: (e: ChangeEvent<HTMLInputElement>) => void;
  callbackEnter?: (e: KeyboardEvent<HTMLInputElement>) => void;
};

export const CustomInput: FC<PropsType> = memo(
  ({ placeholder, value, callback, callbackEnter }) => {

    return (
      <div className={styles.box_select_chat}>
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={callback}
          onKeyDown={callbackEnter}
          className={styles.input}
        />
      </div>
    );
  }
);
