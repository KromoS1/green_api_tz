import { FC, useContext } from 'react'
import { MainPage } from './pages';
import { MyContext } from './provider';

export const App:FC = () => {

	const data = useContext(MyContext);
	console.log(data);
	return (
    <>
			<MainPage/>
		</>
  );
}