import OfferInsideItem from '../offer-inside-item/offer-inside-item';


type OfferInsideScreenProps = {
  actualGoods: string[];
}

function OfferInside ({actualGoods}: OfferInsideScreenProps):JSX.Element {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&rsquo;s inside</h2>
      <ul className="offer__inside-list">
        {actualGoods.map((good) => (
          <OfferInsideItem key={good} actualImage = {good}/>
        ))}
      </ul>
    </div>
  );
}

export default OfferInside;
