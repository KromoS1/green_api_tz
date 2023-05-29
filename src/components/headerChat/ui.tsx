import { FC, memo } from 'react';
import styles from './styles.module.css'
import { AvatarMini, InfoIcons } from '../../UI';

type PropsType = {
	phone: string
}

export const HeaderChat: FC<PropsType> = memo(({ phone }) => {
  return (
    <div className={styles.container_header}>
      <div className={styles.container_avatar}>
        <AvatarMini />
      </div>
      <div className={styles.container_phone}>
        <div className={styles.phone_box1}>
          <div className={styles.phone_box2}>
            <span className={styles.phone}>{phone}</span>
          </div>
        </div>
      </div>
      <div className={styles.container_icons}>
        <div className={styles.icons}>
          <InfoIcons />
        </div>
      </div>
    </div>
  );
});