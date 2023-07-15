import {Link} from 'react-router-dom';
import { AppRoute } from '../../consts';
function Error(): JSX.Element {
  return (
    <div className='container'>
      <h1 className='container'>
          404.
        <br />
        <small>Page not found</small>
      </h1>
      <Link className='container' to={AppRoute.Main}>Go to main page</Link>
    </div>
  );
}

export default Error;
