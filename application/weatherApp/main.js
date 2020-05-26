const api = {
    key: "48d422acdb70fe5223a7b14816fc2651",
    base: "https://api.openweathermap.org/data/2.5/",

}

const searchbox = document.querySelector('.search-box')
searchbox.addEventListener('keypress', setQuery)

const alertError = document.querySelector('.modal')

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value)


    }
}

function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}&lang=ru`)
        .then(weather => {
            return weather.json()
        }).then(displayResults)
        .catch(error => {

            alertError.style.display = 'flex'

            setTimeout(() =>   alertError.style.display = 'none' , 2000)
        })
}

function displayResults(weather) {
    let city = document.querySelector('.location .city')
    city.innerText = `${weather.name}, ${weather.sys.country}`

    let now = new Date()
    let date = document.querySelector('.location .date')
    date.innerText = dateBuilder(now)
    let temp = document.querySelector('.current .temp')
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`

    let weather_el = document.querySelector('.current .weather')
    weather_el.innerText = weather.weather[0].main

    let hilow = document.querySelector('.hi-low')
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`
}

function dateBuilder(d) {
    let months = ["Январь", "Февраль ", "Март ", "Апрель ", "Май", "Июнь", "Июль",
        "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ]

    let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day} ${date} ${month} ${year}`

}