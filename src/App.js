import './styles/index.css';
import Search from './components/search/search';
import Current from './components/Current-Weather/current';
import {WeatherApi , WeatherApiKey} from "../src/apis/weatherapi"
import {useState} from "react"

function App() {
  const [ currentWaether, setCurrent] = useState(null)
  const [ forecastWaether, setForecast] = useState (null)



  function handleonSearchChange (searchData){

 
    const [lat,lon] = searchData.value.split("")
    const currentWeatherFetch = fetch(`${WeatherApi}/weather?lat=${lat}&lon=${lon}&appid=${WeatherApiKey}`)
    const ForecastWeatherFetch = fetch(`${WeatherApi}/forecast?lat=${lat}&lon=${lon}&appid=${WeatherApiKey}`)


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

    console.log(currentWaether);
    console.log(forecastWaether);

    console.log(searchData)

    const name = "john"
    console.log(name)
  }
  return (
    <div className="container">
     <Search onSearchData={handleonSearchChange}/>
     <Current />
    </div>
  );
}

export default App;
