import { FC, memo } from 'react';
import styles from './styles.module.css'
import { transformTimestamp } from './lib';

type PropsType = {
	lastMessage: string
	time: number
	phoneUser: string
}

export const DataDialog:FC<PropsType> = memo((props) => {

	const {date, time} = transformTimestamp(props.time * 1000)

	return (
    <div className={styles.container_data}>
      <div className={styles.data_user}>
        <div className={styles.data_phone}>
          <span className={styles.text}>{props.phoneUser}</span>
        </div>
        <div className={styles.data_time}>
          <span className={styles.time}>
            {props.lastMessage ? <>{time} {date}</> : <></>}
          </span>
        </div>
      </div>
      <div className={styles.data_message}>
        <div className={styles.message}>
					<span className={styles.text}>{props.lastMessage}</span>
				</div>
      </div>
    </div>
  );
})