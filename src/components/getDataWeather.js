export default async function getDataWeather(latitude,longitude){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=8508a7c28350e562ec59a3d1a2bb6ee2&units=metric`)
    const data = await response.json()

    return data
}