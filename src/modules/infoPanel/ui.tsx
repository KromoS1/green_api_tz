import { memo } from 'react';
import styles from './styles.module.css'
import { HeaderInfo, ListDialogs, SelectChat } from '../../components';

export const InfoPanel = memo(() => {
	return <div className={styles.container_info_panel}>
		<HeaderInfo/>
		<div className={styles.side}>
			<SelectChat/>
			<span className={styles.separator}></span>
			<ListDialogs/>
		</div>
	</div>;
})