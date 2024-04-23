import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { AuthContextProvider } from './Context/authContext.jsx'
import { ChatContextProvider } from './Context/ChatContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <ChatContextProvider>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>
)
