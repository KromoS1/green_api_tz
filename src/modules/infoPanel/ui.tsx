import { memo } from 'react';
import styles from './styles.module.css'
import { HeaderInfo } from '../../components';

export const InfoPanel = memo(() => {
	return <div className={styles.container_info_panel}>
		<HeaderInfo/>
	</div>;
})