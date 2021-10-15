import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const OpenWeather = createContext();

export const OpenWeatherProvider = ({ children }) => {
  const API_KEY = "68d319b1e5f2cb214b9f1fd803f72712";
  const [city, setCity] = useState("lat=37.00167&lon=35.32889");
  const [data, setData] = useState([]);
  const [visible,setVisible] = useState(false)

  const findLocation = () => {
    setVisible(true)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCity(
          `lat=${position.coords.latitude}&lon=${position.coords.longitude}`
        );
      });
    } else alert("Geolocation not available");
  };

  useEffect(() => {
    axios(
      `https://api.openweathermap.org/data/2.5/onecall?${city}&exclude=current,hourly,minutely,alerts&units=metric&appid=${API_KEY}&units=metric`
    )
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => console.log(e));
  }, [city]);

  const values = {
    city,
    setCity,
    data,
    setData,
    findLocation,
    visible,
    setVisible
  };
  return <OpenWeather.Provider value={values}>{children}</OpenWeather.Provider>;
};

export const useMain = () => useContext(OpenWeather);
