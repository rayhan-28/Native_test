import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NativeReactSdkProvider } from 'native_react_sdk';
import 'native_react_sdk/dist/native_react_sdk.css'
const email = 'jahir.rayhan@bedatasolutions.com';
  const token = '4733788f-783d-455f-a2b7-3b1815e53196';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NativeReactSdkProvider email={email} token={token}>
    <App />
    </NativeReactSdkProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
