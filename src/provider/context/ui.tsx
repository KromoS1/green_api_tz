import {
  FC,
  PropsWithChildren,
  useReducer,
} from "react";
import { mainReducer } from "./model/main_reducer";
import { mainState } from "./model/state";
import { MyContext, MyDispatchContext } from './model/contexts';

export const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, mainState);

  return (
    <MyContext.Provider value={state}>
      <MyDispatchContext.Provider value={dispatch}>
        {children}
      </MyDispatchContext.Provider>
    </MyContext.Provider>
  );
};
