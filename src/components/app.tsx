import MainPage from '../pages/main-page/main-page';

type AppScreenProps = {
  rentCount: number;
}

function App ({rentCount}: AppScreenProps): JSX.Element{
  return (
    <MainPage rentCount = {rentCount} />
  );
}

export default App;
