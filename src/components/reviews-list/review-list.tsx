import { FullOffer } from '../../types/offer';
import moment from 'moment';
import { Reviews } from '../../types/reviews';
import { useAppSelector } from '../hooks/use-select';

type ReviewsListScreenProps = {
  actualOffer: FullOffer;
}


function ReviewsList ({actualOffer}: ReviewsListScreenProps):JSX.Element{
  const reviews = actualOffer.reviews;
  const avalibleReviews = useAppSelector((state)=> state.rewiews);
  const actualReview = reviews.map((reviewId) => avalibleReviews.find((review)=>review.id === reviewId)) as Reviews;
  return (
    <ul className="reviews__list">
      {actualReview.map((review) => (
        <li className="reviews__item" key={review.id}>
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img
                className="reviews__avatar user__avatar"
                src={review.user.avatarUrl}
                width={54}
                height={54}
                alt="Reviews avatar"
              />
            </div>
            <span className="reviews__user-name">{review.user.name}</span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{ width: `${review.rating * 20 }%` }} />
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">
              {review.comment}
            </p>
            <time className="reviews__time" dateTime={moment(review.date).format('YYYY-MM-DD')}>
              {moment(review.date).format('MMMM YYYY')}
            </time>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ReviewsList;
