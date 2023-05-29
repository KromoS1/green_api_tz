import { memo } from 'react';
import styles from "./styles.module.css";
import { AvatarMini, InfoIcons } from '../../UI';

export const HeaderInfo = memo(() => {
	return (
    <header className={styles.header_info}>
      <div className={styles.avatar_container}>
        <AvatarMini callback={() => {}} />
      </div>
      <div className={styles.icon_container}>
        <InfoIcons />
      </div>
    </header>
  );
})