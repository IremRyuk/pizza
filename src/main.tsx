// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { legacy_createStore as createStore} from 'redux'
import { AllReducer } from './Redux/AllReducer.tsx'
import { Provider } from 'react-redux/es/exports'
import { BrowserRouter } from 'react-router-dom'
let store = createStore(AllReducer)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
)
