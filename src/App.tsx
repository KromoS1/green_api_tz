import { FC } from 'react'
import { MainPage } from './pages';
import styles from './app.module.css'

export const App:FC = () => {

	return (
    <div className={styles.main_style}>
      <MainPage />
    </div>
  );
}