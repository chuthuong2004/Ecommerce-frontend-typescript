import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { GoogleOAuthProvider } from '@react-oauth/google';
import SocketsProvider from './context/socket.context';

const container = document.getElementById('root')!;
const root = createRoot(container);
let persistor = persistStore(store);
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider
      clientId={
        process.env.REACT_APP_GOOGLE_CLIENT_ID ||
        '258122201888-nki79uqhlu4g7tbmj5cukepcqvcs2d5u.apps.googleusercontent.com'
      }
    >
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SocketsProvider>
            <GlobalStyles>
              <App />
            </GlobalStyles>
          </SocketsProvider>
        </PersistGate>
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
