import ListGroup from './components/Explanation';
import Header from './components/Header';
import Explanation from './components/Explanation';
import ImageInput from './components/ImageInput';

function App() {
  return (
    <>
      <Header />
      <div>
        <div className='bg'></div>
        <Explanation />
        <ImageInput />
      </div>
    </>
  );
}

export default App;