import Header from './components/Header';
import Explanation from './components/Explanation';
import ModelOutput from './components/ModelOutput';

function App() {
  return (
    <>
      <Header />
      <div>
        <div className='bg'></div>
        <Explanation />
        <ModelOutput className = 'model'/>
      </div>
    </>
  );
}

export default App;