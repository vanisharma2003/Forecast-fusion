import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Searchbox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function Infobox({info}) {
  const INT_URL="https://cdn.jim-nielsen.com/ios/512/weather-2019-02-07.png";

 return(
    <div className='infobox'>
        <h2 style={{fontFamily:"cursive"}}>Weather info-{info.weather}</h2>
        <div className='main'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 250 }} 
        image={INT_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{fontFamily:"cursive"}}>
         {info.city}{
          info.humidity>80
          ?<ThunderstormIcon/>
          :info.temp>15
          ?<WbSunnyIcon/>
          :<AcUnitIcon/>
         }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"} style={{fontFamily:"cursive"}}>
       <p>Temperature={info.temp}&deg;C  </p>
       <p>Temperature_max={info.temp_max}&deg;C</p> 
       <p> Temperature_min={info.temp_min}&deg;C</p> 
       <p>Humidity={info.humidity}</p> 
       <p>Wind_speed={info.wind_speed}m/s</p>
       <p> The weather can be described as <i>{info.weather}</i>  and feels like {info.feelslike}&deg;C</p>   
        </Typography>
      </CardContent>
    </Card>
    </div>
    
    </div>
  )
}