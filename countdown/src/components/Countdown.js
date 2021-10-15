/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";

const useStyles = makeStyles((themes) => ({
  countdown: {
    background: "rgba(0, 0, 0,0.7)",
    color: "#fff",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    fontSize: "24px",
    border: "2px solid #fff",
    textAlign: "center",
  },
}));

const Countdown = () => {
  const classes = useStyles();

  const [date, setDate] = useState(() => {
    const localDate = localStorage.getItem("date");
    return localDate
      ? moment(JSON.parse(localDate))
      : moment().add(10, "hours");
  });

  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  let interval = useRef();

  useEffect(() => {
    countdown();
    return clearInterval(interval.current);
  }, [date]);
  
  const countdown = () => {
    interval = setInterval(() => {
      localStorage.setItem("date", JSON.stringify(date));
      const now = moment();
      const distance = date - now;

      const hours = moment.duration(distance).hours();
      const minutes = moment.duration(distance).minutes();
      const seconds = moment.duration(distance).seconds();

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  return (
    <div className={classes.countdown}>
      <div>
        <p>{hours}</p>
        <p>
          <small>Saat</small>
        </p>
      </div>
      <div>
        <p>{minutes}</p>
        <p>
          <small>Dakika</small>
        </p>
      </div>
      <div>
        <p>{seconds}</p>
        <p>
          <small>Saniye</small>
        </p>
      </div>
    </div>
  );
};

export default Countdown;
