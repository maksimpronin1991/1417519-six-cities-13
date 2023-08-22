import FavoriteLocItem from '../favorites-item/favotites-item';
import { useAppSelector } from '../hooks/use-select';


function FavoriteLocList ():JSX.Element {
  const rentingOffers = useAppSelector((state)=> state.favorites);
  const rentingOffersForParis = rentingOffers.filter((offer)=> offer.city.name === 'Paris');
  const rentingOffersForCologne = rentingOffers.filter((offer)=> offer.city.name === 'Cologne');
  const rentingOffersForBrussels = rentingOffers.filter((offer)=> offer.city.name === 'Brussels');
  const rentingOffersForAmsterdam = rentingOffers.filter((offer)=> offer.city.name === 'Amsterdam');
  const rentingOffersForHamburg = rentingOffers.filter((offer)=> offer.city.name === 'Hamburg');
  const rentingOffersForDusseldorf = rentingOffers.filter((offer)=> offer.city.name === 'Dusseldorf');
  return (
    <ul className="favorites__list">
      <FavoriteLocItem
        rentingOffers={rentingOffersForParis}
      />
      <FavoriteLocItem
        rentingOffers={rentingOffersForCologne}
      />
      <FavoriteLocItem
        rentingOffers={rentingOffersForBrussels}
      />
      <FavoriteLocItem
        rentingOffers={rentingOffersForAmsterdam}
      />
      <FavoriteLocItem
        rentingOffers={rentingOffersForHamburg}
      />
      <FavoriteLocItem
        rentingOffers={rentingOffersForDusseldorf}
      />
    </ul>

  );
}

export default FavoriteLocList;
