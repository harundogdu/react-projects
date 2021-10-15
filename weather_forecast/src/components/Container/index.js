import { useMain } from "../../context";
import City from "../City";
import Forecast from "../Forecast";
function Container() {
  const { visible, setVisible, city, setCity, data, findLocation } = useMain();
  return (
    <div className="container">
      <div className="box">
        <City visible={visible} setVisible={setVisible} city={city} setCity={setCity} findLocation={findLocation} />
        <Forecast data={data} />
      </div>
    </div>
  );
}

export default Container;
