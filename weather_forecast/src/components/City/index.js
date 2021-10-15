import React from "react";
import iller from "illerimiz";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faListAlt } from "@fortawesome/free-solid-svg-icons";
function City({ visible, setVisible, setCity, findLocation }) {
  const data = iller().get();
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  return (
    <div className="city">
      <button onClick={findLocation}>
        <span>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </span>
        Find My Location
      </button>
      {!visible ? (
        <select name="city" onChange={handleChange}>
          {data.map((item) => (
            <option
              value={`lat=${item.enlem}&lon=${item.boylam}`}
              key={item.plaka}
            >
              {item.isim.toUpperCase()}
            </option>
          ))}
        </select>
      ) : (
        <button className="btn-second" onClick={() => setVisible(false)}>
          <span>
            <FontAwesomeIcon icon={faListAlt} />
          </span>
          Another Cities
        </button>
      )}
    </div>
  );
}

export default React.memo(City);
