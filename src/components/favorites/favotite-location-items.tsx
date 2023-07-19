import { Offers } from '../../types/offer';
import FavoritePlaceCard from '../favorites-place-card/favorites-place-card';

type FavoriteLocItemsScreenProps = {
  rentingOffers: Offers;
}

function FavoriteLocItems ({rentingOffers}: FavoriteLocItemsScreenProps):JSX.Element {
  const favoriteOffers = rentingOffers.filter((offer) => offer.isFavorite === true);
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>Amsterdam</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {favoriteOffers.map((offer) => (
          <FavoritePlaceCard key={offer.id} rentingOffer = {offer}/>
        ))}
      </div>
    </li>
  );
}

export default FavoriteLocItems;
