import { cityNames } from '../../consts';
import FavoriteLocItem from '../favorites-item/favotites-item';
import { useAppSelector } from '../hooks/use-select';


function FavoriteLocList ():JSX.Element {
  const rentingOffers = useAppSelector((state)=> state.favorites);

  return (
    <ul className="favorites__list">
      {cityNames.map((name)=>(
        <FavoriteLocItem
          key={name}
          rentingOffers={rentingOffers.filter((offer)=> offer.city.name === name)}
        />))}
    </ul>

  );
}

export default FavoriteLocList;
