// Init storage
const storage = new Storage();
// Load Storage data
const weatherLocation = storage.getLocationData();
// Init weather and ui
const weather = new Weather(weatherLocation.city, weatherLocation.country);
const ui = new UI();



// DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location event
document.getElementById('w-change-btn').addEventListener('click', (event) => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    weather.changeLocation(city, country);
    storage.setLocationData(city, country);

    getWeather();

    $('#locModal').modal('hide');
})

// Get Weather event
function getWeather(){
    weather.getWeather()
    .then(results => {
        ui.paint(results)
    })
    .catch(err => console.log(err));
}
