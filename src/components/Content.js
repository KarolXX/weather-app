import React, { useEffect} from 'react';

const Content = ({city, weather, setWeather}) => {
  
  useEffect(() =>{
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=25166afb88ec7927d01f26162291923a`
    if(city !== '') {
      fetch(API)
        .then(response => response.json())
        .then(res => setWeather({
          temperature: res.main.temp,
          windSpeed: res.wind.speed,
          cityInWeather: city
        })
      )
      
    }
   }, [city] )

console.log(weather)
    return ( 
    <div className="content">
        <h2 className="content__title">{city.toUpperCase()}</h2>
    <h3 className="content__property">Temperature {weather.temperature}</h3>
    <h3 className="content__property">Wind speed {weather.windSpeed}</h3>
        
        
    </div>
     );
}
 
export default Content;
