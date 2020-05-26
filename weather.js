class Weather {
    constructor(city, country) {
        this.apiKey = '76ef074b7973263981ac04c28bb69cca';
        this.city = city;
        this.country = country;
    }

    // Fetch from API
    async getWeather(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`)
    
        const responseData = await response.json();
        return responseData;
    }

    // Change location
    changeLocation(city, country){
        this.city = city;
        this.country = country;
    }
}

