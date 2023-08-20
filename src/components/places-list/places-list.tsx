import { Offer, Offers } from '../../types/offer';
import { PremiumMark } from '../premium-mark/premium-mark';
import { Link } from 'react-router-dom';
import {MouseEvent} from 'react';
import cn from 'classnames';
import { classesFor } from '../../types/classes-for';
import { sorting } from '../../utils/utils';
import { changeFavStatus } from '../../store/api-actions';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks/use-select';
import { redirectToRoute } from '../../store/action';
import { AppRoute } from '../../consts';

type PlacesListScreenProps = {
  activeSorting: string;
  rentingOffers: Offers;
  onListItemHover: (listItemName: string) => void;
  onListItemUnHover:(listItemName: string) => void;
  classesForPlacesList:classesFor;
}

function PlacesList ({activeSorting,rentingOffers,onListItemHover,onListItemUnHover,classesForPlacesList}: PlacesListScreenProps,):JSX.Element {
  const {placesListType,placesCardType,imageWrapper} = classesForPlacesList;
  const dispatch = useDispatch();
  const loginStatus = useAppSelector((state)=> state.authorizationStatus);

  const handleListItemHover = (event:MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    onListItemHover(event.currentTarget.id);
  };

  const handleListItemUnHover = (event:MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    onListItemUnHover(event.currentTarget.id);
  };

  let chcker = 0;

  const handleBookmarkClick = (event:MouseEvent<HTMLButtonElement>) =>{
    event.preventDefault();
    if(loginStatus === 'NO_AUTH'){
      dispatch(redirectToRoute(AppRoute.Login));
    }else{
      const id = event.target.closest('article').id as string;
      if(rentingOffers.find((offer)=>offer.id === id)?.isFavorite){
        chcker = 0;
      }else{
        chcker = 1;
      }
      dispatch(changeFavStatus({id , status: chcker}));
    }
  };

  return (
    <div className={cn(placesListType,'places__list')}>
      {sorting[activeSorting](rentingOffers).map((offer:Offer) => (
        <article
          className={cn(placesCardType,'place-card')}
          key={offer.id}
          id={offer.id}
          onMouseEnter={handleListItemHover}
          onMouseLeave={handleListItemUnHover}
        >
          {offer.isPremium ? <PremiumMark/> : ''}
          <div className={cn(imageWrapper,'place-card__image-wrapper')}>
            <a

              href="#"
            >
              <img
                className="place-card__image"
                src={offer.previewImage}
                width={260}
                height={200}
                alt="Place image"
              />
            </a>
          </div>
          <div className="place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">€{offer.price}</b>
                <span className="place-card__price-text">/&nbsp;night</span>
              </div>
              <button
                onClick={handleBookmarkClick}
                className= {offer.isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button ' : 'place-card__bookmark-button button'}
                type="button"
              >
                <svg
                  className="place-card__bookmark-icon"
                  width={18}
                  height={19}
                >
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <span style={{ width: `${offer.rating * 20 }%` }} />
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <Link to={`/offer/${offer.id}`}>
                {offer.title}
              </Link>
            </h2>
            <p className="place-card__type">{offer.type}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default PlacesList;
