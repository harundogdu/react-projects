import React, { useEffect, useState } from "react";
function Forecast({ data }) {
  const [loading, setLoading] = useState(true);

 

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [data]);

  const calculateDay = (timestamp) => {
    let unix_timestamp = timestamp;
    var date = new Date(unix_timestamp * 1000);
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var dayName = days[date.getDay()];
    return dayName;
  };

  return (
    <div>
      {loading && <div>Loading...</div>}
      {!loading && (
        <ul className="dayList">
          {data.daily.map((item, index) => (
            <li key={index}>
              <div className="text">{calculateDay(item.dt)}</div>
              <div className="text">
                <img
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  alt="Clear"
                />
              </div>
              <div className="text">{item.weather[0].main}</div>
              <div className="text">{item.weather[0].description}</div>
              <div className="text">
                <span title="Temperature">{item.temp.day}°</span> -{" "}
                <span title="Felt Temperature">{item.feels_like.day}°</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default React.memo(Forecast);
