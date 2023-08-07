import Logo from '../../components/logo/logo';
import HeaderNav from '../../components/header-nav/header-nav';
import LocationList from '../../components/location-list/location-list';
import { Cities } from '../../components/cities/cities';

function MainPage ():JSX.Element {
  return(
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo/>
            <HeaderNav/>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList/>
          </section>
          <Cities/>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
