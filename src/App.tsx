import { FC, useContext, useEffect } from 'react';
import { MainPage } from './pages';
import styles from './app.module.css'
import { MyDispatchContext, setCurrentChatID } from './provider';

export const App:FC = () => {

  const dispatch = useContext(MyDispatchContext)

  useEffect(() => {
    const EscKeyDown = (e: KeyboardEvent) => {
      if(e.key === 'Escape') {
        dispatch?.(setCurrentChatID(''))
      }
    };

    document.addEventListener("keydown", EscKeyDown);

    return () => {
      document.removeEventListener("keydown", EscKeyDown);
    }
  },[])

	return (
    <div className={styles.main_style}>
      <MainPage />
    </div>
  );
}