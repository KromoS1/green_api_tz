import { ChangeEvent, FC, memo, useCallback, useContext, useState } from 'react';
import { MyDispatchContext, setDataGreenApi } from '../../provider';
import styles from './styles.module.css'
import { CustomInput } from '../../UI';

type PropsType = {
  close: () => void
}

export const DataGreenApiForm: FC<PropsType> = memo(({ close }) => {

  const [id, setId] = useState("");
  const [apiToken, setApiToken] = useState("");
  const [error,setError] = useState('');
  const dispatch = useContext(MyDispatchContext);

  const changeID = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setId(e.currentTarget.value);
    setError("");
  }, []);

  const changeToken = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setApiToken(e.currentTarget.value);
    setError("");
  }, []);

  const save = () => {

    if (id.trim() && apiToken.trim()){
      dispatch?.(
        setDataGreenApi({ idInstance: id, apiTokenInstance: apiToken })
      );

      localStorage.setItem("idInstance", id);
      localStorage.setItem("apiTokenInstance", apiToken);

      close();
    }else{
      setError('Поля должны быть заполнены.')
    }
  };

  return (
    <div className={styles.fixed_overlay} id="window_modal">
      <div className={styles.modal_container}>
        <div className={styles.modal}>
          <div className={styles.container_title}>
            <span>
              Перед началом работы введите данные из личного кабинета GREEN-API
            </span>
          </div>
          <div>
            <CustomInput
              value={id}
              callback={changeID}
              placeholder={"IdInstance"}
            />
          </div>
          <div>
            <CustomInput
              value={apiToken}
              callback={changeToken}
              placeholder={"ApiTokenInstance"}
            />
          </div>
          <div className={styles.container_error}>
            {error && <span className={styles.error}>{error}</span>}
          </div>
          <button onClick={save} className={styles.button}>
            сохранить
          </button>
        </div>
      </div>
    </div>
  );
});