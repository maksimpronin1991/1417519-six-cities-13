import * as dayjs from 'dayjs';
import { Review } from '../../types/reviews';

type ReviewsItemScreenProps = {
  actualReview: Review;
}


function ReviewItem ({actualReview}: ReviewsItemScreenProps):JSX.Element{
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={actualReview.user.avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{actualReview.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${actualReview.rating * 20 }%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {actualReview.comment}
        </p>
        <time className="reviews__time" dateTime={dayjs(actualReview.date).format('YYYY-MM-DD')}>
          {dayjs(actualReview.date).format('MMMM YYYY')}
        </time>
      </div>
    </li>
  );
}

export default ReviewItem;
