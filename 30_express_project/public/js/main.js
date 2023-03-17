const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temperature = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = `Plz write the City name before search`;
        datahide.classList.add('data_hide');

    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=ef316ea81dd0050923ae455eac638c21`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            const temperatures = ((arrData[0].main.temp) - 273.15);
            temperature.innerText = temperatures.toFixed(2);

            const tempMood = arrData[0].weather[0].main;
            // condition to check sunny or cloud weather
            if (tempMood =="Clear") {
                temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color: #eccc68;'></i>";
            }   
            else if (tempMood =="Cloud") {
                temp_status.innerHTML = "<i class='fa-solid fa-cloud' style='color: #f1f2f6;'></i>";
            } 
            else if (tempMood =="Rain") {
                temp_status.innerHTML = "<i class='fa-solid fa-rain' style='color: #a4b0be;'></i>";
            }
            else {
                temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color: #eccc68;'></i>";
            }
            datahide.classList.remove('data_hide');

        } catch (e) {
            city_name.innerText = `Plz enter the city name properly`;
            datahide.classList.add('data_hide');
        }
    }

}
submitBtn.addEventListener('click', getInfo);