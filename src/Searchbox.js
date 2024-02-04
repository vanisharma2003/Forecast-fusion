import React, {  useState } from 'react';
import './Searchbox.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function Searchbox({updateinfo}) {
  let[cityname,setcityname]=useState("");
  const  API_URL="api.openweathermap.org/data/2.5/forecast"
  const API_KEY="15ed6d34b1824bd1fc36264ea3c349e0";
let getweatherinfo= async ()=>{
  let response=await fetch(`${API_URL}?q=${cityname}&appid=${API_KEY}&units=metric`);
  let jsonresponse= await response.json();
  let result={
    city:jsonresponse.name,
    temp:jsonresponse.main.temp,
    temp_min:jsonresponse.main.temp_min,
    temp_max:jsonresponse.main.temp_max,
    feelslike:jsonresponse.main.feels_like,
    humidity:jsonresponse.main.humidity,
    weather:jsonresponse.weather[0].description,
    wind_speed:jsonresponse.wind.speed,
  }
  console.log(jsonresponse)
  return result
}
// const API="api.openweathermap.org/data/2.5/forecast";
// const KEY="15ed6d34b1824bd1fc36264ea3c349e0";
// const generateforecast= async()=>{
// let response= await(`${API}?q=${city}&appid=${KEY}`);
// let jsonforecast= await response.json();
// console.log(jsonforecast)
// }
    let handlechange=(event)=>{
    setcityname(event.target.value);
    }
    let handlesubmit= async(evt)=>{
    evt.preventDefault();
    setcityname("");
let newinfo= await  getweatherinfo();
updateinfo(newinfo);
    }
    
  return (
    <div className='main'>
      <form onSubmit={handlesubmit}>
      <TextField id="city" label="Enter city" value={cityname} variant="standard" required onChange={handlechange}/>
      <br></br><br></br>
      <Button variant="contained" type="submit">Search</Button>
      </form>
    </div>
  )
}