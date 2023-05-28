import { ActionsType } from './consts';

export const setDataGreenApi = (payload: {	idInstance: string | null, apiTokenInstance: string | null,}) => ({
	type: ActionsType.setDataGreenApi, payload
})