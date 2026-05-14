import { useState } from 'react'
import './App.css'

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [isFahrenheit, setIsFahrenheit] = useState(true);

  function updateCity(e){
    setCity(e.target.value);
  };

  function convert(){
    setIsFahrenheit(!isFahrenheit);
  }

  async function handleSubmit(e){
    e.preventDefault();
    const apiKey = "8e13ab0f63d4b9be94fdc7c529fa2b76";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    
    setWeather(data);
  }

  return (
    <>
      <h1>Weather Dashboard API App</h1>
      
      {/* Form */}
      <form onSubmit={ handleSubmit }>
        <label htmlFor="city">Enter City Name: </label>
        <input type="text" id='city' onChange={ updateCity } />
        <button>Submit</button>
      </form>

     { weather && <p> {weather.name} </p>}
     { weather && <p> {weather.main.temp} <button onClick={ convert }> { isFahrenheit ? 'Fahrenheit' : 'Celsius' } </button></p>}
      
    </>
  )
}

export default App
