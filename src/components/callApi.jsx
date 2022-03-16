import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import dataCity from "../resources/city.json";
import {Link} from "react-router-dom";
import {getCurrentDate} from "./getCurrenteDate";
import Day from "./Day";
import {timeStamps} from "./timeStamps";
import getDataWeather from "./getDataWeather";
import AsyncLocalStorage from "@createnextapp/async-local-storage";

const CallApi = () => {
    const [weather, setWeather] = useState(null)
    const [city, setCity] = useState()
    const [information, setInformation] = useState([])
    const [sync, setSync] = useState(false)
    const [init, setInit] = useState(true)
    const [isFavorite, setIsFavorite] = useState(false)
    const [favorites, setFavorites] = useState([])
    const [callApi, setCallApi] = useState(true)
    const [callFavorite, setCallFavorite] = useState(false)


    function addFavorite() {
        setCallFavorite(true)
    }

    async function getApi() {
        let randomCity = Math.floor(Math.random() * dataCity.length)
        let city = dataCity[randomCity].Nom_commune
        setCity(city)
        let GPSCoordinates = dataCity[randomCity].coordonnees_gps
        setInformation([city, GPSCoordinates])
        let latitude = GPSCoordinates.split(",")[0].trim()
        let longitude = GPSCoordinates.split(",")[1].trim()
        const data = await getDataWeather(latitude, longitude);
        setWeather(data)
        let checkArray = favorites.find(e => e == information) !== undefined ? true : false
        setIsFavorite(checkArray)
        setCallApi(false)
    }

    useEffect(async () => {
            if (sync) {
                await AsyncLocalStorage.setItem("City", JSON.stringify(favorites))
                setSync(false)
            }
            if (init) {
                const items = await AsyncLocalStorage.getItem('City')
                if (items !== undefined) {
                    const itemsParsed = await JSON.parse(items)
                    await setFavorites(itemsParsed)
                }
                setInit(false)
                setCallApi(true)
            }
            if (callApi) {
                getApi()
            }
            if (callFavorite) {
                if (favorites.find(el => el == information)) {
                    setFavorites(favorites.filter(e => e !== information))
                } else {
                    setFavorites([...favorites, information])
                }
                setCallFavorite(false)
                setSync(true)
            }

        },
        [callApi, callFavorite])

    if (!weather) {
        return <p></p>
    } else {
        return (
            <div>
                <div className="app">
                    <Link to="Favorite">Go to Favorite</Link><br/>
                    <button onClick={getApi}>Generate</button>
                    <button onClick={addFavorite}>Add to Favorite</button>
                    <p>Current date : {getCurrentDate()}</p>
                    <p>City : {city}</p>
                    <div className='weatherList'>
                        <Day
                            day={timeStamps(weather.daily[0].dt)}
                            image={`http://openweathermap.org/img/wn/${weather.daily[0].weather[0].icon}.png`}
                            label1={weather.daily[0].temp.min}
                            label2={weather.daily[0].temp.max}
                            dayweek="0"
                        />

                        <Day
                            day={timeStamps(weather.daily[1].dt)}
                            image={`http://openweathermap.org/img/wn/${weather.daily[1].weather[0].icon}.png`}
                            label1={weather.daily[1].temp.min}
                            label2={weather.daily[1].temp.max}
                            dayweek="1"
                        />

                        <Day
                            day={timeStamps(weather.daily[2].dt)}
                            image={`http://openweathermap.org/img/wn/${weather.daily[2].weather[0].icon}.png`}
                            label1={weather.daily[2].temp.min}
                            label2={weather.daily[2].temp.max}
                            dayweek="2"
                        />

                        <Day
                            day={timeStamps(weather.daily[3].dt)}
                            image={`http://openweathermap.org/img/wn/${weather.daily[3].weather[0].icon}.png`}
                            label1={weather.daily[3].temp.min}
                            label2={weather.daily[3].temp.max}
                            dayweek="3"
                        />

                        <Day
                            day={timeStamps(weather.daily[4].dt)}
                            image={`http://openweathermap.org/img/wn/${weather.daily[4].weather[0].icon}.png`}
                            label1={weather.daily[4].temp.min}
                            label2={weather.daily[4].temp.max}
                            dayweek="4"
                        />

                        <Day
                            day={timeStamps(weather.daily[5].dt)}
                            image={`http://openweathermap.org/img/wn/${weather.daily[5].weather[0].icon}.png`}
                            label1={weather.daily[5].temp.min}
                            label2={weather.daily[5].temp.max}
                            dayweek="5"
                        />

                        <Day
                            day={timeStamps(weather.daily[6].dt)}
                            image={`http://openweathermap.org/img/wn/${weather.daily[6].weather[0].icon}.png`}
                            label1={weather.daily[6].temp.min}
                            label2={weather.daily[6].temp.max}
                            dayweek="6"
                        />

                    </div>
                </div>
            </div>
        )
    }
}

export default CallApi