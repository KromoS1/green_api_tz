import { useContext } from 'react';
import { MyDispatchContext, setDataGreenApi } from '../../provider';

export const useCheckDataInLS = () => {
	const dispatch = useContext(MyDispatchContext);

	return () => {
		const id = localStorage.getItem('idInstance');
		const apiToken = localStorage.getItem('apiTokenInstance');

		if(id && apiToken) { 
			dispatch?.(setDataGreenApi({ idInstance: id, apiTokenInstance: apiToken }));
		}
	}
}