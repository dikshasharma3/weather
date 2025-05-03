import readline from "readline/promises"
import https from "https"

const API="7ce65b01dd65f7f9df18bf43d2754599";
const Base_URL="https://api.openweathermap.org/data/2.5/weather"

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const getWeather= async(city)=>{
    const url=`${Base_URL}?q=${city}&appid=${API}&units=metric`;  //endpt
    try{
     const res= await fetch(url);
     if(!res.ok)
     {
        console.log("invalid city !!")
     }
  const weatherData= await res.json();   // to readable stringgg
  console.log(weatherData);
  console.log("Weather Information : ")
  console.log("City : ",weatherData.name)
  console.log("Temperature : ",weatherData.main.temp +"°C")
  console.log("Description : ",weatherData.weather[0].description)
  console.log("Humidty : ",weatherData.main.humidity)
  console.log("Wind Speed : ",weatherData.wind.speed)
    }
    catch(err)
    {
        console.log(err);
    }

}
const city= await rl.question("Enter Your City.. \n");
await getWeather(city);
rl.close();