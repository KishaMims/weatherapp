import {useState, useEffect } from "react";


function Weather() {
    const [weather, SetWeather] = useState([]);
   const [zipcode, setZipcode] = useState("");
  //const temp = weather.list.map(weatherDay => weatherDay.main.temp);
  //const temps = weather.list.map(weatherDay => weatherDay.city.name);
    useEffect(()=> {
        fetch(`http://localhost:8080/forecast?zip=${zipcode}`)
        .then((response)=>response.json())
        .then(weather => {
            SetWeather(weather);
            console.log('Weather fethced...', weather);
        });
    }, [zipcode]);

   // const temp = weather.list.map(weatherDay => weatherDay.main.temp);

     return (
    <div className="Weather">
        <h1>Weekly Weather</h1>  
        <form onSubmit={onsubmit}>
            <input placeholder="ZipCode" value={zipcode} onChange= {(event) => setZipcode(event.target.value)} type="zipcode"/>
            <button type="submit" className="SearchButton" onClick={onsubmit}>Search</button>
        </form>
        <div>
            {JSON.stringify(weather)}
        </div>
    </div>
   );
}

export default Weather;

