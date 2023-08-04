import { useState } from 'react';
import cn from 'classnames';

function PlacesSortingForm (){

  const [isOpened, setOpenedState] = useState(false);
  const opened = isOpened ? 'places__options--opened' : '';
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setOpenedState(!isOpened)}>
Popular
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={cn(`places__options places__options--custom ${opened}`)}>
        <li
          className="places__option places__option--active"
          tabIndex={0}
        >
  Popular
        </li>
        <li className="places__option" tabIndex={0}>
  Price: low to high
        </li>
        <li className="places__option" tabIndex={0}>
  Price: high to low
        </li>
        <li className="places__option" tabIndex={0}>
  Top rated first
        </li>
      </ul>
    </form>);
}

export default PlacesSortingForm;
