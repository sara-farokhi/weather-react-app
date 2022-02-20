import { useState } from "react";

import Result from "./components/Result";
import Form from "./components/Form";

import "./App.css";

const App = () => {
  const [weather, setWeather] = useState({
    location: {
      name: "Tehran",
      region: "Tehran",
      country: "Iran",
      lat: 35.73,
      lon: 51.33,
      tz_id: "Asia/Tehran",
      localtime_epoch: 1633456108,
      localtime: "2021-10-05 21:18",
    },
    current: {
      last_updated_epoch: 1633455900,
      last_updated: "2021-10-05 21:15",
      temp_c: 22.0,
      temp_f: 71.6,
      is_day: 0,
      condition: {
        text: "Clear",
        icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        code: 1000,
      },
      wind_mph: 4.3,
      wind_kph: 6.8,
      wind_degree: 330,
      wind_dir: "NNW",
      pressure_mb: 1015.0,
      pressure_in: 29.97,
      precip_mm: 0.0,
      precip_in: 0.0,
      humidity: 25,
      cloud: 0,
      feelslike_c: 22.6,
      feelslike_f: 72.6,
      vis_km: 10.0,
      vis_miles: 6.0,
      uv: 1.0,
      gust_mph: 5.1,
      gust_kph: 8.3,
    },
  });
  const [errorMsg, setErrorMsg] = useState(false);

  const getWeather = async (city) => {
    const res =
      await fetch(`http://api.weatherapi.com/v1/current.json?key=2d099b4b1c594f068a0194806210609&q=${city}&aqi=no
      `);
    const data = await res.json();
    if (data.error) {
      setErrorMsg(true);
      setTimeout(() => {
        setErrorMsg(false);
      }, 3000);
    } else {
      setWeather(data);
    }
  };

  // ;

  return (
    <>
      <div className="app-wrapper">
        <h1>Weather Application</h1>
        <Form getWeather={getWeather} />
        {errorMsg ? (
          <h1 style={{ color: "coral" }}>City Not Found</h1>
        ) : (
          <Result weather={weather} />
        )}
      </div>
    </>
  );
};

export default App;
