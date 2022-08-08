
function cityWeather(){
    let name = document.getElementById("cityName").value;
    const url1 = `https://api.spoonacular.com/recipes/random?apiKey=32211210573742e3bef09be4421c4c24&tags=vegetarian,dessert`

    const url2 = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${name}&cnt={cnt}&appid=8a91a752765f6356a3167c785e3eeee9`

    getWeather1();

    async function getWeather1(){
        try{
            let res1 = await fetch(url1); // await waits for fetch data
            let weatherData1 = await res1.json();
            console.log(weatherData1);
            append1(weatherData1);
        }
        catch(err1){
            console.log(err1);
        }
    }

    getWeather2();

    async function getWeather2(){
        try{
            let res2 = await fetch(url2); // await waits for fetch data
            let weatherData2 = await res2.json();
            console.log(weatherData2);
            // append2(weatherData2);
        }
        catch(error){
            console.log(error);
        }
    }

    // console.log(name);
}

append1 = (data) =>{
    document.getElementById("weatherContainer").innerHTML = "";
    
    let temp = document.createElement("p");
    temp.innerHTML = `Temperature : ${data.main.temp}`;

    let temp_min = document.createElement("p");
    temp_min.innerHTML = `Min Temperature : ${data.main.temp_min}`;

    let temp_max = document.createElement("p");
    temp_max.innerHTML = `Max Temperature : ${data.main.temp_max}`;
    // console.log(temp);

    let wind = document.createElement("p");
    wind.innerHTML = `Wind <br> deg : ${data.wind.deg} <br> speed : ${data.wind.speed}`;

    document.querySelector("#weatherContainer").append(temp, temp_min, temp_max, wind);

}
// append2 = (data) =>{
//     document.getElementById("weatherContainer").innerHTML = "";
    
//     let temp = document.createElement("p");
//     temp.innerHTML = `Temperature : ${data.main.temp}`;

//     let temp_min = document.createElement("p");
//     temp_min.innerHTML = `Min Temperature : ${data.main.temp_min}`;

//     let temp_max = document.createElement("p");
//     temp_max.innerHTML = `Max Temperature : ${data.main.temp_max}`;
//     // console.log(temp);

//     let wind = document.createElement("p");
//     wind.innerHTML = `Wind <br> deg : ${data.wind.deg} <br> speed : ${data.wind.speed}`;

//     document.querySelector("#weatherContainer").append(temp, temp_min, temp_max, wind);

// }