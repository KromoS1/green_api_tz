import ReactDOM from 'react-dom/client'
import {App} from './App'
import './index.css'
import { ContextProvider } from './provider';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ContextProvider>
      <App />
    </ContextProvider>
);
