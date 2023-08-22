import { Offers } from '../../types/offer';
import FavoritePlaceCard from '../favorites-place-card/favorites-place-card';


type FavoriteLocItemsScreenProps = {
  rentingOffers: Offers;
}

function FavoriteLocItem ({rentingOffers}: FavoriteLocItemsScreenProps):JSX.Element {
  return (
    <>
      { rentingOffers.length < 1 && (null)}
      {rentingOffers.length > 0 && (
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{rentingOffers[0].city.name}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {rentingOffers.map((offer) => (
              <FavoritePlaceCard key={offer.id} rentingOffer = {offer}/>
            ))}
          </div>
        </li>
      )}
    </>
  );
}

export default FavoriteLocItem;
