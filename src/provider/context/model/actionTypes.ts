import { addChat, setCurrentChatID, setDataGreenApi, setMessage } from './actions';

export type ActionTypes = ReturnType<typeof setDataGreenApi> 
| ReturnType<typeof setMessage> 
| ReturnType<typeof setCurrentChatID> 
| ReturnType<typeof addChat>