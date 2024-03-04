import './styles/index.css';
import Search from './components/search/search';
import Current from './components/Current-Weather/current';
import {WeatherApi , WeatherApiKey} from "../src/apis/weatherapi"
import {useState} from "react"
import Forecast from './components/forcast/forecast';

function App() {
  const [ currentWeather, setCurrent] = useState(null)
  const [ forecastWaether, setForecast] = useState (null)



  function handleonSearchChange (searchData){

 
    const [lon,lat] = searchData.value.split(" ")
    const currentWeatherFetch = fetch(`${WeatherApi}/weather?lat=${lat}&lon=${lon}&appid=${WeatherApiKey}&units=metric`)
    const ForecastWeatherFetch = fetch(`${WeatherApi}/forecast?lat=${lat}&lon=${lon}&appid=${WeatherApiKey}&units=metric`)


    Promise.all([currentWeatherFetch,ForecastWeatherFetch])
      .then(async (response) => {
        const WeatherResponse =await  response[0].json()
        const ForecastWeatherResponse =await  response[1].json()

        setCurrent( { city: searchData.label , ...ForecastWeatherResponse})
        setForecast( {city: searchData.label, ...WeatherResponse})


      })
      .catch((error) =>{
       console.log(error);
      })

    console.log(currentWeather);
    console.log(forecastWaether);

    console.log(searchData)

    // const name = "john"
    // console.log(name)
  }
  return (
    <div className="container">
     <Search onSearchData={handleonSearchChange}/>
{    forecastWaether && < Current data ={forecastWaether}/>}
{ currentWeather && <Forecast  data = {currentWeather}/>
}  
 </div>
  );
}

export default App;
