import * as dayjs from 'dayjs';
import { Rewiew } from '../../types/rewiews';

type ReviewsItemScreenProps = {
  actualRewiew: Rewiew;
}


function ReviewItem ({actualRewiew}: ReviewsItemScreenProps):JSX.Element{
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={actualRewiew.user.avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{actualRewiew.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${actualRewiew.rating * 20 }%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {actualRewiew.comment}
        </p>
        <time className="reviews__time" dateTime={dayjs(actualRewiew.date).format('YYYY-MM-DD')}>
          {dayjs(actualRewiew.date).format('MMMM YYYY')}
        </time>
      </div>
    </li>
  );
}

export default ReviewItem;
