import { Offer, Offers } from '../../types/offer';
import { PremiumMark } from '../premium-mark/premium-mark';
import { Link } from 'react-router-dom';
import {MouseEvent} from 'react';

type PlacesListScreenProps = {
  rentingOffers: Offers;
  onListItemHover: (listItemName: string) => void;
}

function PlacesList ({rentingOffers,onListItemHover}: PlacesListScreenProps,):JSX.Element {
  const handleListItemHover = (event:MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    onListItemHover(event.currentTarget.id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {rentingOffers.map((offer:Offer) => (
        <article className="cities__card place-card" key={offer.id} id={offer.id} onMouseEnter={handleListItemHover}>
          {offer.isFavorite ? <PremiumMark/> : ''}
          <div className="cities__image-wrapper place-card__image-wrapper">
            <a href="#">
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
