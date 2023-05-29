export type AppStateType = {
  idInstance: string | null;
  apiTokenInstance: string | null;
  currentChatId: string
  allMyChat: {
    [key: string]: string;
  };
  messages: {
    [chatId: string]: MessageType[];
  };
};

export type MessageType = {
  nameUser?: string ;
  type: "you" | "user";
  timestamp: number;
  text: string;
};