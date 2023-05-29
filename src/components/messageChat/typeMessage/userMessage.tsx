import { FC, memo } from 'react';
import styles from '../styles.module.css'

type PropsType = {
	text: string
	time: string
}

export const UserMessage: FC<PropsType> = memo(({ text, time }) => {
  return (
    <div className={`${styles.message} ${styles.message_user_box}`}>
      <span className={`${styles.triangle} ${styles.triangle_user}`}>
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
            fill="#0000000"
            d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"
          ></path>
          <path
            fill="currentColor"
            d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"
          ></path>
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