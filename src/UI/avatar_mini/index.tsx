import { FC, memo } from 'react';
import styles from './styles.module.css'

type PropsType = {
	callback?: () => void
}

export const AvatarMini: FC<PropsType> = memo(() => {
	return (
    <div role="button" className={styles.avatar_mini}>
      <img
        className={styles.avatar_img}
        alt="Avatar mini"
        src="assets/avatar-siegbert-gottfried.png"
      />
    </div>
  );
})