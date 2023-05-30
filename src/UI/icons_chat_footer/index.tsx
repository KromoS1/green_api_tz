import { memo } from "react";
import styles from "./styles.module.css";

export const IconsChatFooter = memo(() => {
  return (
    <div className={styles.box_icons}>
      <div className={styles.icon_face}>
        <svg height="24px" width="24px">
          <use href="assets/main.svg#smail" />
        </svg>
      </div>
      <div className={styles.icon_clip}>
        <svg width="24px" height="24px">
          <use href="assets/main.svg#magnifying_glass" />
        </svg>
      </div>
    </div>
  );
});
