import { AppRoute } from '../../consts';
import { redirectToRoute } from '../../store/action';
import { changeFavStatus } from '../../store/api-actions';
import { Offer } from '../../types/offer';
import { BookmarkData } from '../../types/reviews';
import { useAppDispatch } from '../hooks/use-dispatch';
import { useAppSelector } from '../hooks/use-select';
import { PremiumMark } from '../premium-mark/premium-mark';
import {MouseEvent} from 'react';


type FavoritePlaceCardScreenProps = {
  rentingOffer: Offer;
}

function FavoritePlaceCard ({rentingOffer}: FavoritePlaceCardScreenProps):JSX.Element {
  const loginStatus = useAppSelector((state)=> state.authorizationStatus);
  const dispatch = useAppDispatch();
  let chcker = 0;

  const handleBookmarkClick = (event:MouseEvent<HTMLButtonElement>) =>{
    event.preventDefault();
    if(loginStatus === 'NO_AUTH'){
      dispatch(redirectToRoute(AppRoute.Login));
    }else{
      if(rentingOffer?.isFavorite){
        chcker = 0;
      }else{
        chcker = 1;
      }
      dispatch(changeFavStatus({id:rentingOffer.id , status: chcker} as BookmarkData));
    }
  };

  return (
    <article className="favorites__card place-card">
      {rentingOffer.isFavorite ? <PremiumMark/> : ''}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={rentingOffer.previewImage}
            width={150}
            height={110}
            alt="Place image"
          />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{rentingOffer.price}</b>
            <span className="place-card__price-text">
        /&nbsp;night
            </span>
          </div>
          <button
            onClick={handleBookmarkClick}
            className= {rentingOffer.isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button'}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rentingOffer.rating * 20 }%` }}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{rentingOffer.title}</a>
        </h2>
        <p className="place-card__type">{rentingOffer.type}</p>
      </div>
    </article>
  );
}

export default FavoritePlaceCard;
