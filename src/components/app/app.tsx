import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute,AuthorizationStatus } from '../../consts';

import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavorivePage from '../../pages/favorite-page/favorite-page';
import OfferPage from '../../pages/offer-page/offer-page';
import Error from '../../pages/404-page/404-page';
import PrivateRoute from '../private-route/private-route';
import { FullOffers, Offers } from '../../types/offer';

type AppProps = {
  fullOffers: FullOffers;
  rentingOffers: Offers;
}

function App ({rentingOffers,fullOffers}: AppProps): JSX.Element{
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element=
            {
              <MainPage
                rentingOffers = {rentingOffers}
              />
            }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
        //
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavorivePage
                rentingOffers = {rentingOffers}
              />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={
            <OfferPage
              rentingOffers = {rentingOffers}
              fullOffers = {fullOffers}
            />
          }
        />
        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
