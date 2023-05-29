export type ReceiveNotifyType = {
  receiptId: number;
  body: {
    typeWebhook: "incomingMessageReceived" | string;
    instanceData: {
      idInstance: number;
      wid: string;
      typeInstance: string;
    };
    timestamp: number;
    idMessage: string;
    senderData: {
      chatId: string;
      sender: string;
      senderName: string;
    };
    messageData: {
      typeMessage: "textMessage" | "extendedTextMessage" | string;
      textMessageData?: {
        textMessage: string;
      };
      extendedTextMessageData?: {
        text: string;
      };
    };
  };
};

export type DeleteNotifyType = {
	result: boolean
}