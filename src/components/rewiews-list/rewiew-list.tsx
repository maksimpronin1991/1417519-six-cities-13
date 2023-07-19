import { FullOffer } from '../../types/offer';
import ReviewItem from '../rewiew-item/rewiew-item';
import { avalibleRewiews } from '../../mocks/rewiews';

type ReviewsListScreenProps = {
  actualOffer: FullOffer;
}


function ReviewsList ({actualOffer}: ReviewsListScreenProps):JSX.Element{
  const actualRewiew = avalibleRewiews.find((rewiew)=> rewiew.id === actualOffer.rewiews[0]);
  return (
    <ul className="reviews__list">
      <ReviewItem actualRewiew = {actualRewiew}/>
    </ul>
  );
}

export default ReviewsList;
