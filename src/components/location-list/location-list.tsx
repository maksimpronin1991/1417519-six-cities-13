import { cityNames } from '../../consts';
import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks/use-select';
import { useAppDispatch } from '../hooks/use-dispatch';
import { changeCity } from '../../store/action';
import classNames from 'classnames';

function LocationList () {
  const currentCity = useAppSelector((state) => state.currentCity);
  const dispatch = useAppDispatch();
  const handleCityClick = (evt: MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    const city = evt.currentTarget.dataset.city;
    dispatch(changeCity(city));
  };

  return (
    <ul className="locations__list tabs__list">
      {cityNames.map((city)=> (
        <li
          className="locations__item"
          key={city}
          data-city={city}
          onClick={handleCityClick}
        >
          <Link
            className={classNames(
              {
                'locations__item-link tabs__item tabs__item--active':
                  city === currentCity,
                'locations__item-link tabs__item': city !== currentCity,
              },
              ''
            )}
            to="#"
          >
            <span>{city}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default LocationList;
