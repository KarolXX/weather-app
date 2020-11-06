import React, {useState} from 'react';
import '../css/App.css';

const Browser = ({setCityName}) => {
    const [city, setCity] = useState('')
    const setCityInBrowser = (e) => {
       setCity(e.target.value)
    }
    const searchCity = (e) => {
       e.preventDefault(); 
       setCityName(city)
    }

    return (
        //form used to search for a city by name
        <>
        
        <div className="browser">
        <h2 className="browser__title">Browser</h2>
        <form>
            <input
             className="browser__input"
             type="text"
             placeholder="put your city"
             onChange={setCityInBrowser}
             value={city}/>
             <button className="browser__btn" onClick={searchCity}>Search</button>
        </form>
        </div>
        </>
      );
}
 
export default Browser;