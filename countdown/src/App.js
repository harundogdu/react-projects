import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import clockImage from "./images/clock.jpg";
import Countdown from "./components/Countdown";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: "100vh",
    backgroundImage: `url(${clockImage})`,
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    backgroundRepeat: false,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Container maxWidth="sm">
        <Countdown></Countdown>
      </Container>
    </div>
  );
}

export default App;
