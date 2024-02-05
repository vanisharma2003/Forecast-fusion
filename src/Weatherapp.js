import React, { useState } from 'react';
import Searchbox from './Searchbox';
import Infobox from './Infobox';
export default function Weatherapp({info}) {
    const [weatherinfo,setweatherinfo]=useState({
        city:"Haryana",
        temp:19.17,
        temp_min:19.17,
        temp_max:19.17,
        feelslike:17.72,
        wind_speed:0.81,
        humidity:22,
        weather:"overcast",
      
    });
    let updateinfo=(result)=>{
        setweatherinfo(result)
    }
  return (
    <div>
        <h1 style={{textAlign:"center",fontFamily:"cursive"}}>Forecast Fusion</h1>
      <Searchbox updateinfo={updateinfo} />
     <br></br><br></br>
       <Infobox info={weatherinfo} />
    </div>
  )
}