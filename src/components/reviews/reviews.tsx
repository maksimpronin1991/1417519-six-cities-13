import { FullOffer } from '../../types/offer';
import ReviewForm from '../review-form/review-form';
import ReviewsList from '../reviews-list/review-list';

type ReviewsScreenProps = {
  actualOffer: FullOffer;
}

function Reviews ({actualOffer}: ReviewsScreenProps):JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
  Reviews · <span className="reviews__amount">{actualOffer.reviews.length}</span>
      </h2>
      <ReviewsList actualOffer = {actualOffer}/>
      <ReviewForm />
    </section>
  );
}

export default Reviews;
