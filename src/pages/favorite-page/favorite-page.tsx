import Logo from '../../components/logo/logo';
import FavoriteLocItems from '../../components/favorites/favotite-location-items';
import HeaderNav from '../../components/header-nav/header-nav';
import { useAppSelector } from '../../components/hooks/use-select';


function FavorivePage ():JSX.Element{

  const rentingOffers = useAppSelector((state)=> state.offers);
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo/>
            <HeaderNav/>
          </div>
        </div>
      </header>
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
      </main>
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
  );
}

export default FavorivePage;
