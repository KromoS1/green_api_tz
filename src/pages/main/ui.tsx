import { memo, useContext, useEffect } from 'react';
import { DataGreenApiForm } from '../../modules';
import { MyContext } from '../../provider';
import { Chat } from '../../modules';
import { useCheckDataInLS } from './model';
import { SelectChat } from '../../components';

export const MainPage = memo(() => {
	
	const data = useContext(MyContext);
  const checkDataLS = useCheckDataInLS()

  useEffect(() => {
    checkDataLS();
  },[])

	return (
    <div>
      {!data?.idInstance && <DataGreenApiForm />}
      <SelectChat />
      <Chat />
    </div>
  );
})