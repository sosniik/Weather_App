import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {getLocalStorage} from "./useLocalStorage";
import getDataWeather from "./getDataWeather";
import Day from "./Day";
import {timeStamps} from "./timeStamps";

export default function Favorite() {
    const [city, setCity] = useState([])
    const [dataApi, setDataApi] = useState(null)

    async function getWeather(GPSCoordinate) {
        let latitude = GPSCoordinate.split(",")[0].trim()
        let longitude = GPSCoordinate.split(",")[1].trim()
        let data = await getDataWeather(latitude, longitude)
        setDataApi(data)
    }

    function deleteWeather(entityToDelete, index) {
        const newCity = [...city]
        newCity.splice(index, 1)
        setCity(newCity)
        localStorage.setItem("City", JSON.stringify(newCity))
    }

    useEffect(async () => {
            setCity(getLocalStorage)
        }, []
    )


    const listCity = city.map((city, index) =>
        <ul key={city[0]}>
            <button onClick={() => getWeather(city[1])}>{city[0]}</button>
            <button onClick={() => deleteWeather(city, index)}>Delete</button>
        </ul>
    )

    if (!dataApi) {
        return <div>
            <Link to="/">Go to Home</Link>
            {listCity}
        </div>
    } else {
        return (
            <div>
                <div>
                    <div className="app">
                        <Link to="/">Go to Home</Link>
                        <div>
                            {listCity}
                        </div>
                        <div className='weatherList'>

                            <Day
                                day={timeStamps(dataApi.daily[0].dt)}
                                image={`http://openweathermap.org/img/wn/${dataApi.daily[0].weather[0].icon}.png`}
                                label1={dataApi.daily[0].temp.min}
                                label2={dataApi.daily[0].temp.max}
                                dayweek="0"
                            />

                            <Day
                                day={timeStamps(dataApi.daily[1].dt)}
                                image={`http://openweathermap.org/img/wn/${dataApi.daily[1].weather[0].icon}.png`}
                                label1={dataApi.daily[1].temp.min}
                                label2={dataApi.daily[1].temp.max}
                                dayweek="1"
                            />

                            <Day
                                day={timeStamps(dataApi.daily[2].dt)}
                                image={`http://openweathermap.org/img/wn/${dataApi.daily[2].weather[0].icon}.png`}
                                label1={dataApi.daily[2].temp.min}
                                label2={dataApi.daily[2].temp.max}
                                dayweek="2"
                            />

                            <Day
                                day={timeStamps(dataApi.daily[3].dt)}
                                image={`http://openweathermap.org/img/wn/${dataApi.daily[3].weather[0].icon}.png`}
                                label1={dataApi.daily[3].temp.min}
                                label2={dataApi.daily[3].temp.max}
                                dayweek="3"
                            />

                            <Day
                                day={timeStamps(dataApi.daily[4].dt)}
                                image={`http://openweathermap.org/img/wn/${dataApi.daily[4].weather[0].icon}.png`}
                                label1={dataApi.daily[4].temp.min}
                                label2={dataApi.daily[4].temp.max}
                                dayweek="4"
                            />

                            <Day
                                day={timeStamps(dataApi.daily[5].dt)}
                                image={`http://openweathermap.org/img/wn/${dataApi.daily[5].weather[0].icon}.png`}
                                label1={dataApi.daily[5].temp.min}
                                label2={dataApi.daily[5].temp.max}
                                dayweek="5"
                            />

                            <Day
                                day={timeStamps(dataApi.daily[6].dt)}
                                image={`http://openweathermap.org/img/wn/${dataApi.daily[6].weather[0].icon}.png`}
                                label1={dataApi.daily[6].temp.min}
                                label2={dataApi.daily[6].temp.max}
                                dayweek="6"
                            />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}