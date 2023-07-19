type OfferInsideItemScreenProps = {
  actualImage: string;
}
function OfferInsideItem ({actualImage}: OfferInsideItemScreenProps):JSX.Element{
  return (
    <li className="offer__inside-item">{actualImage}</li>
  );
}


export default OfferInsideItem;
