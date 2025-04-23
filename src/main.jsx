import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer/index.js'
import { Toaster } from 'react-hot-toast'
export const store = configureStore({
  reducer: rootReducer,
})
createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <Provider store={store}>
    <App />
    <Toaster/>
  </Provider>

    
  </StrictMode>,
)
