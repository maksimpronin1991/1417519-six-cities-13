import { Offers } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type PlacesListScreenProps = {
  rentingOffers: Offers;
}

function PlacesList ({rentingOffers}: PlacesListScreenProps):JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {rentingOffers.map((offer) => (
        <PlaceCard key={offer.id} rentingOffer = {offer}/>
      ))}
    </div>
  );
}

export default PlacesList;
