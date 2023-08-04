import PlacesList from '../../components/places-list/places-list';
import Logo from '../../components/logo/logo';
import { Offer, Offers } from '../../types/offer';
import Map from '../../components/map/map';
import { CITY } from '../../mocks/city';
import { useState } from 'react';
import HeaderNav from '../../components/header-nav/header-nav';
import LocationList from '../../components/location-list/location-list';
import PlacesSortingForm from '../../components/places-sorting-form/places-sorting-form';

type MainScreenProps = {
  rentingOffers: Offers;
}

function MainPage ({rentingOffers}: MainScreenProps):JSX.Element {

  const classesForPlacesList = {
    mapType:'cities__map',
    placesListType: 'cities__places-list  tabs__content',
    placesCardType: 'cities__card',
    imageWrapper:'cities__image-wrapper',
  };


  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(
    undefined
  );

  const handleListItemHover = (listItemName: string) => {
    const currentPoint = rentingOffers.find((point) => point.id === listItemName);
    setSelectedPoint(currentPoint);
  };

  const handleListItemUnHover = (listItemName: string) => {
    const currentPoint = rentingOffers.find((point) => point.id === listItemName);
    if(currentPoint){
      setSelectedPoint(undefined);
    }
  };

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
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{rentingOffers.length} places to stay in Amsterdam</b>
              <PlacesSortingForm/>
              <PlacesList
                rentingOffers = {rentingOffers}
                onListItemHover={handleListItemHover}
                onListItemUnHover={handleListItemUnHover}
                classesForPlacesList={classesForPlacesList}

              />
            </section>
            <div className="cities__right-section">
              <Map
                city={CITY}
                points={rentingOffers}
                selectedPoint={selectedPoint}
                mapType = {classesForPlacesList.mapType}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
