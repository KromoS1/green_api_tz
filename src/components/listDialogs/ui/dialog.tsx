import { FC, memo } from 'react';
import styles from './styles.module.css'
import { AvatarMini, DataDialog } from '../../../UI';

type PropsType = {
  phone: string;
  lastMessage: string;
  time: number
  callback: () => void;
};

export const Dialog: FC<PropsType> = memo((props) => {
  return (
    <div className={styles.container_dialog}>
      <div className={styles.dialog}>
        <div className={styles.dialog_box_elements}>
          <div className={styles.container_avatar}>
            <div className={styles.avatar}>
              <AvatarMini callback={() => {}} />
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