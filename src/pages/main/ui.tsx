import { memo, useContext, useEffect } from 'react';
import { DataGreenApiForm, InfoPanel } from '../../modules';
import { MyContext } from '../../provider';
import { Chat } from '../../modules';
import { useCheckDataInLS } from './model';

export const MainPage = memo(() => {
	
	const data = useContext(MyContext);
  const checkDataLS = useCheckDataInLS()

  useEffect(() => {
    checkDataLS();
  },[])

	return (
    <>
      {!data?.idInstance && <DataGreenApiForm />}
      <InfoPanel/>
      <Chat />
    </>
  );
})