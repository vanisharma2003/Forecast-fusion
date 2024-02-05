import React, {  useState } from 'react';
import './Searchbox.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function Searchbox({updateinfo}) {
  let[cityname,setcityname]=useState("");
  let[error,seterror]=useState(false);
  const  API_URL="https://api.openweathermap.org/data/2.5/weather"
  const API_KEY="15ed6d34b1824bd1fc36264ea3c349e0";
let getweatherinfo= async ()=>{
  try{
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
  }catch(error){
   throw error
  }
}
    let handlechange=(event)=>{
    setcityname(event.target.value);
    }
    let handlesubmit= async(evt)=>{
      try{
        evt.preventDefault();
        setcityname("");
    let newinfo= await  getweatherinfo();
    updateinfo(newinfo);
      }catch(error){
     seterror(true)
      } 
    }
    
  return (
    <div className='main'>
      <form onSubmit={handlesubmit}>
      <TextField id="city" label="Enter city" value={cityname} variant="standard" required onChange={handlechange}/>
      <br></br><br></br>
      <Button variant="contained" type="submit" style={{fontFamily:"cursive"}}>Search</Button>
      {error && <p style={{fontFamily:"cursive",color:"red"}}>No such place is present in our API</p>}
      </form>
    </div>
  )
}