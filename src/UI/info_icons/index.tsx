import { memo } from 'react';
import styles from './styles.module.css'

export const InfoIcons = memo(() => {
	return (
    <div className={styles.info_icons}>
      <span className={styles.icons_rows}>
        <div className={styles.icon_box}>
          <div className={styles.icon_padding}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />{" "}
              </svg>
            </span>
          </div>
        </div>
      </span>
    </div>
  );
})