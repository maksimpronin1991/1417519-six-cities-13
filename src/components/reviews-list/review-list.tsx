import { FullOffer } from '../../types/offer';
import ReviewItem from '../review-item/review-item';
import { avalibleReviews } from '../../mocks/reviews';

type ReviewsListScreenProps = {
  actualOffer: FullOffer;
}


function ReviewsList ({actualOffer}: ReviewsListScreenProps):JSX.Element{
  const reviews = actualOffer.reviews;
  const actualReview = reviews.map((reviewId) => avalibleReviews.find((review)=>review.id === reviewId));
  return (
    <ul className="reviews__list">
      {actualReview.map((review) => (
        <ReviewItem key={review.id } actualReview = {review} />
      ))}
    </ul>
  );
}

export default ReviewsList;
