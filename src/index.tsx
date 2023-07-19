import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { rentingOffers } from './mocks/offers';
import { fullOffers } from './mocks/more-offer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      rentingOffers = {rentingOffers}
      fullOffers = {fullOffers}
    />
  </React.StrictMode>
);
