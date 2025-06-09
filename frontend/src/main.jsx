import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import {Provider} from "react-redux"
import { store } from './redux/store.jsx';
import "./styles/index.css"
import { VisitorContextId  } from '/context/visitorContext.jsx';
import { AuthProvider } from '../hooks/authHook.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <BrowserRouter>
    <Provider store={store}>
    <VisitorContextId>
      <App />
      </VisitorContextId>
    </Provider>
      <ToastContainer />
    </BrowserRouter>
      </AuthProvider>
  </StrictMode>,
)
