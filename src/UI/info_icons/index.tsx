import { memo } from 'react';
import styles from './styles.module.css'

export const InfoIcons = memo(() => {
	return (
    <div className={styles.info_icons}>
      <span className={styles.icons_rows}>
        <div className={styles.icon_box}>
          <div className={styles.icon_padding}>
            <span>
              <svg width="16" height="16">
                <use href="assets/main.svg#dots" />
              </svg>
            </span>
          </div>
        </div>
      </span>
    </div>
  );
})