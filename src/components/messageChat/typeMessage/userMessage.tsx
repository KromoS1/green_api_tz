import { FC, memo } from "react";
import styles from "../styles.module.css";

type PropsType = {
  text: string;
  time: string;
};

export const UserMessage: FC<PropsType> = memo(({ text, time }) => {
  return (
    <div className={`${styles.message} ${styles.message_user_box}`}>
      <span className={`${styles.triangle} ${styles.triangle_user}`}>
        <svg height="13" width="8">
          <use href="assets/main.svg#triangle_user" />
        </svg>
      </span>
      <div className={`${styles.message_data} ${styles.message_user}`}>
        <div>
          <div className={styles.message_text}>
            <span>{text}</span>
            <span className={styles.span_indent}>
              <span className={styles.indent}></span>
            </span>
          </div>
        </div>
        <div className={styles.message_time}>
          <div className={styles.time}>
            <span className={styles.span_time}>{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
});
