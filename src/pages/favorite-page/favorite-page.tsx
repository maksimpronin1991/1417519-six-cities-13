import Logo from '../../components/logo/logo';
import FavoriteLocItems from '../../components/favorites/favotite-location-items';
import HeaderNav from '../../components/header-nav/header-nav';
import { useAppSelector } from '../../components/hooks/use-select';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import { useAppDispatch } from '../../components/hooks/use-dispatch';
import { useEffect } from 'react';
import { fetchFavoritesAction } from '../../store/api-actions';
import { setFavoritesDataLoadingStatus } from '../../store/action';
import FavoriteLocEmpty from '../../components/favorites-empty/favorites-empty';


function FavorivePage ():JSX.Element{
  const favoritesOfferFetchingStatus = useAppSelector((state) => state.isFavoritesDataLoading);
  const rentingOffers = useAppSelector((state)=> state.favorites);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!favoritesOfferFetchingStatus) {
      dispatch(fetchFavoritesAction());
    }
    dispatch(setFavoritesDataLoadingStatus(false));

  }, [dispatch,favoritesOfferFetchingStatus]);

  return (
    <>
      {favoritesOfferFetchingStatus === true && <LoadingScreen/>}
      {favoritesOfferFetchingStatus === false && rentingOffers && (
        <div className="page">
          <header className="header">
            <div className="container">
              <div className="header__wrapper">
                <Logo/>
                <HeaderNav/>
              </div>
            </div>
          </header>
          {rentingOffers.length < 1 && (<FavoriteLocEmpty/>)}
          {rentingOffers.length > 0 && (
            <main className="page__main page__main--favorites">
              <div className="page__favorites-container container">
                <section className="favorites">
                  <h1 className="favorites__title">Saved listing</h1>
                  <ul className="favorites__list">
                    <FavoriteLocItems
                      rentingOffers = {rentingOffers}
                    />
                  </ul>
                </section>
              </div>
            </main>)}

          <footer className="footer container">
            <a className="footer__logo-link" href="main.html">
              <img
                className="footer__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width={64}
                height={33}
              />
            </a>
          </footer>
        </div>
      )}
    </>
  );
}

export default FavorivePage;
