import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Setting } from './consts';
import { rentingOffers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      rentCount = {Setting.rentCount}
      rentingOffers = {rentingOffers}
    />
  </React.StrictMode>
);
