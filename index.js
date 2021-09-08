const searchForm = document.querySelector('.search-location');
const cityValue = document.querySelector('.search-location input');
const cityName = document.querySelector('.city-name p');
const cardBody = document.querySelector('.card-body');
const timeImage = document.querySelector('.card-top img')
const cardInfo = document.querySelector('.back-card')

const spitOutCelcious = (kelvin) => {
celcius = Math.round(kelvin - 273.15);
return celcius; 

}

const isDayTime = (icon) => {
    if (icon.includes('d')){ return true}
    else { return false}
}

updateWeatherApp = (city) => {
    console.log(city);
    const imageName = city.weather[0].icon;
    const iconSrc = `http://openweathermap.org/img/wn/${imageName}@2x.png`
    cityName.textContent = city.name;
    cardBody.innerHTML =`
    <div class="card-mid row">
    <div class="col-8 text-center temp">
      <span>${spitOutCelcious(city.main.temp)}&deg;C</span>
    </div>
    <div class="col-4 condition-temp">
      <p class="condition">${city.weather[0].description}</p>
      <p class="high">${spitOutCelcious(city.main.temp_max)}&deg;C</p>
      <p class="low">${spitOutCelcious(city.main.temp_min)}&deg;C</p>
    </div>
  </div>

  <div class="icon-container shadow mx-auto">
    <img src="${iconSrc}" />
  </div>
  <div class="card-bottom px-3 py-5 row">
    <div class="col text-center">
      <p>${spitOutCelcious(city.main.feels_like)}&deg;C</p>
      <span>Feels Like</span>
    </div>
    <div class="col text-center">
      <p>${city.main.humidity}%</p>
      <span>Humidity</span>
    </div>
  </div>
    
    
    `;
    if (isDayTime(imageName)) {
timeImage.setAttribute('src', 'img/day_image.svg');
    }
    else {
        timeImage.setAttribute('src', 'img/night_image.svg')
        cityName.classList.add('text-white');
    }

    cardInfo.classList.remove('d-none');
}

searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const citySearched = cityValue.value.trim();
    console.log(citySearched)
    searchForm.reset();

    requestCity(citySearched)
    .then((data) => { 
        updateWeatherApp(data); 
    })
    .catch((error) => { console.log(error)})
})