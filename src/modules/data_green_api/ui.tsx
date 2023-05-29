import { ChangeEvent, memo, useContext, useState } from 'react';
import { MyDispatchContext, setDataGreenApi } from '../../provider';

export const DataGreenApiForm = memo(() => {

	const [id, setId] = useState('')
	const [apiToken, setApiToken] = useState("");
  const dispatch = useContext(MyDispatchContext);

	const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
		switch(e.currentTarget.dataset.name) {
			case "id": 
				setId(e.currentTarget.value)
				break;
			case "apiToken": 
				setApiToken(e.currentTarget.value);
				break;
		}
	};

  const save = () => {
    dispatch?.(setDataGreenApi({ idInstance: id, apiTokenInstance: apiToken }));
    localStorage.setItem("idInstance", id);
    localStorage.setItem("apiTokenInstance", apiToken);
  }

	return (
    <div>
      <div>
        <span>Введите данные</span>
      </div>
      <div>
        <span>IdInstance</span>
        <input type="text" data-name={"id"} onChange={changeInput} value={id} />
      </div>
      <div>
        <span>IdApiTokenInstanceInstance</span>
        <input
          type="text"
          data-name={"apiToken"}
          onChange={changeInput}
          value={apiToken}
        />
      </div>
      <button onClick={save}>сохранить</button>
    </div>
  );
})