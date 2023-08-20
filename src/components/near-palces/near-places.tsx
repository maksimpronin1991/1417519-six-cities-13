import { classesFor } from '../../types/classes-for';
import { Offers } from '../../types/offer';
import PlacesList from '../places-list/places-list';

type PlacesListPageScreenProps = {
  neighbourhoodOffers: Offers;
  handleListItemHover: (listItemName: string) => void;
  handleListItemUnHover:(listItemName: string) => void;
  classesForPlacesList:classesFor;
}

function NearPlaces({neighbourhoodOffers,handleListItemHover,handleListItemUnHover,classesForPlacesList}: PlacesListPageScreenProps): JSX.Element {

  return (
    <section className="near-places places">
      <h2 className="near-places__title">
Other places in the neighbourhood
      </h2>
      <PlacesList
        activeSorting={'Popular'}
        rentingOffers = {neighbourhoodOffers}
        onListItemHover={handleListItemHover}
        onListItemUnHover={handleListItemUnHover}
        classesForPlacesList={classesForPlacesList}
      />
    </section>);
}

export default NearPlaces;
