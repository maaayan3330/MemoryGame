import './App.css';
import Header from './components/Header.jsx';
import Card from './components/Card.jsx';

// images for the board
import AMY from './assets/Amy.jpg';
import DIAZ from './assets/diaz.jpg';
import CHARLES from './assets/charles.jpg';
import HITCHOCOK from './assets/hitchocok.jpg';
import HOLT from './assets/holt.jpg';
import JAKE from './assets/jake-peralta.jpg';
import JINA from './assets/Jina.jpg';
import TERRY from './assets/terry.jpg';


function App() {

  // create a arr of the images for the board
  const images = [AMY,DIAZ,CHARLES,HITCHOCOK,HOLT,JAKE,JINA,TERRY];
  const boardImages = [...images, ...images];

  return (
    <>
    <Header/>
    <div className='board'> 
      {boardImages.map((img , index) => (
      <Card key={index} image={img}/>
    ))}
    </div>

    </> 
  )
}

export default App
