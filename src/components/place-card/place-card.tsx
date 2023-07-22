import { useState } from 'react';
import { Offer } from '../../types/offer';
import { PremiumMark } from '../premium-mark/premium-mark';
import { Link } from 'react-router-dom';

type PlaceCardScreenProps = {
  rentingOffer: Offer;
}

function PlaceCard ({rentingOffer}: PlaceCardScreenProps):JSX.Element {

  const [, setIsShown] = useState(false);
  return (
    <article className="cities__card place-card"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {rentingOffer.isFavorite ? <PremiumMark/> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={rentingOffer.previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{rentingOffer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className= {rentingOffer.isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button ' : 'place-card__bookmark-button button'}
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
            <span style={{ width: `${rentingOffer.rating * 20 }%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${rentingOffer.id}`}>
            {rentingOffer.title}
          </Link>
        </h2>
        <p className="place-card__type">{rentingOffer.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
