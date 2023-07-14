import {Link} from 'react-router-dom';

function Error(): JSX.Element {
  return (
    <div className='container'>
      <h1 className='container'>
          404.
        <br />
        <small>Page not found</small>
      </h1>
      <Link className='container' to="/">Go to main page</Link>
    </div>
  );
}

export default Error;
