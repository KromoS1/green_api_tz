import { FC, PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const BrowserRouterProvider: FC<PropsWithChildren> = ({children}) => {
	return <BrowserRouter>{children}</BrowserRouter>;
}