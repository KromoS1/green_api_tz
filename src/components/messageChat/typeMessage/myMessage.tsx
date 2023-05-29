import { FC, memo } from 'react';
import styles from '../styles.module.css'

type PropsType = {
	text: string
	time: string
}

export const MyMessage: FC<PropsType> = memo(({ text, time }) => {
  return (
    <div className={`${styles.message} ${styles.message_my_box}`}>
      <span className={`${styles.triangle} ${styles.triangle_my}`}>
        <svg
          viewBox="0 0 8 13"
          height="13"
          width="8"
          preserveAspectRatio="xMidYMid meet"
          version="1.1"
          x="0px"
          y="0px"
          enable-background="new 0 0 8 13"
        >
          <path
            opacity="0.13"
            d="M5.188,1H0v11.193l6.467-8.625 C7.526,2.156,6.958,1,5.188,1z"
          ></path>
          <path
            fill="currentColor"
            d="M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z"
          ></path>
        </svg>
      </span>
      <div className={`${styles.message_data} ${styles.message_my}`}>
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