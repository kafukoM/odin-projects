const city = document.querySelector('#city')
const submit = document.querySelector('#submit')
const name = document.getElementById('city_name')
const temp = document.getElementById('temp')
const description = document.getElementById('description')
const humidity = document.getElementById('humidity')
const pressure = document.getElementById('pressure')
const wind = document.getElementById('wind')
const bodyContainer = document.querySelector('body_container')


const key = '09c87b474e8275419b70100439438bba'

window.onload = () => city.textContent = '';

async function getWeatherData() {
    try {
        console.log(city.value)
        const coordinates = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city.value}&appid=${key}`, { mode: 'cors' })

        const objectCoordinates = await coordinates.json()
        const latitude = objectCoordinates[0].lat
        const longitude = objectCoordinates[0].lon

        console.log(latitude, longitude)

        const weatherJSON = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`, { mode: 'cors' })

        const weatherObj = await weatherJSON.json()

        console.log(weatherObj)
        console.log(weatherObj.main.temp)

        name.textContent = `Name: ${weatherObj.name}`

        temp.textContent = `Temperature: ${(weatherObj.main.temp - 273.5).toFixed(2)}`

        description.textContent = `Description: ${weatherObj.weather[0].description}`
        humidity.textContent = `Humidity: ${weatherObj.main.humidity}`
        pressure.textContent = `Air Pressure: ${weatherObj.main.pressure}`
        wind.textContent = `Wind Speed: ${weatherObj.wind.speed}km/h`

    } catch (error) {
        console.error(error)
    }
}



submit.addEventListener('click', getWeatherData)