import { useContext, useEffect } from 'react';
import { AppStateType, MessageType, MyContext, MyDispatchContext, setMessage } from '../../provider';
import { instance } from '../../api/base';
import { DeleteNotifyType, ReceiveNotifyType } from './types';

const useCreateApiReceiveNotification = (state: AppStateType | null) => {

	return {
    receiveNotification: () =>
      instance
        .get<ReceiveNotifyType>(
          `/waInstance${state?.idInstance}/receiveNotification/${state?.apiTokenInstance}`
        )
        .then((res) => res.data),
    deleteNotification: (receiptId: number) =>
      instance
        .delete<DeleteNotifyType>(
          `/waInstance${state?.idInstance}/deleteNotification/${state?.apiTokenInstance}/${receiptId}`
        )
        .then((res) => res.data),
  };
}

export const useLongPoll = () => {

	const state = useContext(MyContext);
  const dispatch = useContext(MyDispatchContext);
	const api = useCreateApiReceiveNotification(state);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.receiveNotification();

				if (response) {
					if (response && response.body.typeWebhook === "incomingMessageReceived") {

            const text =
              response.body.messageData.typeMessage === "extendedTextMessage"
                ? response.body.messageData.extendedTextMessageData?.text
                : response.body.messageData.textMessageData?.textMessage;

						const messageObj: MessageType = {
              type: "user",
              nameUser: response.body.senderData.senderName,
              text: text ?? '',
              timestamp: response.body.timestamp,
            };
            dispatch?.(setMessage(messageObj));
					}
					
					await api.deleteNotification(response.receiptId);
				}
        
        await fetchData();
      } catch (error) {
        console.error(error);
        await fetchData();
      }
    };

    if (state?.idInstance && state.apiTokenInstance) {
      fetchData();
    }

    // Останавливаем запросы на сервер при размонтировании компонента
    return () => {};
  }, [state?.idInstance]);
}