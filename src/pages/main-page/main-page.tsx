import LocationList from '../../components/location-list/location-list';
import { Cities } from '../../components/cities/cities';
import { useAppSelector } from '../../components/hooks/use-select';
import { CitiesEmpty } from '../../components/cities-empty/cities-empty';
import Header from '../../components/header/header';
import { getCurrentCity, getOffers } from '../../store/offers-data/offers-selectors';

function MainPage ():JSX.Element {

  const currentCity = useAppSelector(getCurrentCity);
  const offers = useAppSelector(getOffers);
  const avalibleOffers = offers.find((offer)=> offer.city.name === currentCity);
  const checkAvalibleOffers = avalibleOffers === undefined;


  return(
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs"></div>
        <section className="locations container">
          <LocationList/>
        </section>
        {!checkAvalibleOffers && <Cities/> }
        {checkAvalibleOffers && <CitiesEmpty/> }
      </main>
    </div>
  );
}

export default MainPage;
