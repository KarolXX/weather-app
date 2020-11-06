import React, {useState} from 'react';

import '../css/App.css';
import Header from './Header';
import Browser from './Browser';
import Content from './Content';

function App() {
  const [city, setCity] = useState('') //name of city used in fetch
  const[weather, setWeather] = useState({
    temperature: 0,
    windSpeed: 0,
    cityInWeather: city,
 }) //property passed to Content 
  const componentContent = () => <Content 
  city={city}
  weather={weather}
  setWeather={setWeather} 
  />

  //styles(set the picture winter or summer according to the temperature)
  const pictureWinter = {
    backgroundImage: 'url(../css/winter.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }
  const pictureSummer = {
    backgroundImage: 'url(../css/summer.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }
  
  return (
    <div className="App" style={weather.temperature < 280 ? pictureWinter : pictureSummer}>
      <Header />
      <Browser setCityName={setCity}/>
      {componentContent()}
    </div>
  );
}

export default App;
