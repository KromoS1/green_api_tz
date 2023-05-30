import { memo, useCallback, useContext, useEffect, useState } from 'react';
import { DataGreenApiForm, InfoPanel } from '../../modules';
import { MyContext } from '../../provider';
import { Chat } from '../../modules';
import { useCheckDataInLS } from './model';
import { createPortal } from 'react-dom';

export const MainPage = memo(() => {

	const data = useContext(MyContext);
  const [viewModal, setViewModal] = useState<boolean>(true);	
  const checkDataLS = useCheckDataInLS()

  const close = useCallback(() => setViewModal(true),[])

  useEffect(() => {
    
    setTimeout(() => setViewModal(!!data?.idInstance),500)

  }, [data?.idInstance]);

  useEffect(() => {
    checkDataLS();
  },[])

	return (
    <>
      {!viewModal &&
        createPortal(<DataGreenApiForm close={close} />, document.body)}
      <InfoPanel />
      <Chat />
    </>
  );
})