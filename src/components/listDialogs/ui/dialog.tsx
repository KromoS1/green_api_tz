import { FC, memo } from 'react';
import styles from './styles.module.css'
import { AvatarMini, DataDialog } from '../../../UI';

type PropsType = {
  phone: string;
  lastMessage: string;
  time: number;
  isSelect: boolean
  callback: () => void;
};

export const Dialog: FC<PropsType> = memo((props) => {

  const styleIsActive = `${styles.dialog_box_elements} ${props.isSelect ? styles.dialog_active : ''}`;

  return (
    <div className={styles.container_dialog}>
      <div className={styles.dialog}>
        <div className={styleIsActive} onClick={props.callback}>
          <div className={styles.container_avatar}>
            <div className={styles.avatar}>
              <AvatarMini />
            </div>
          </div>
          <DataDialog
            lastMessage={props.lastMessage}
            phoneUser={props.phone}
            time={props.time}
          />
        </div>
      </div>
    </div>
  );
});