import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { fullOffers } from './mocks/more-offer';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        fullOffers = {fullOffers}
      />
    </Provider>
  </React.StrictMode>
);
