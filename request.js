const key = 'fa7428bb21b0e237f89b3b06e6dc263a';

// const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=fa7428bb21b0e237f89b3b06e6dc263a';

const requestCity = async (city) => {
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}`;

    const response = await fetch(baseURL + query);
    const data = await response.json();
   return data;   

}

