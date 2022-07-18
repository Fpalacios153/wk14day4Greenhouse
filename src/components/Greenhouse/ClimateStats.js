import "./ClimateStats.css";
import { ClimateContext } from "../../context/ClimateContext";
import { useContext } from "react";

function ClimateStats() {
  const { temperature, humidity } = useContext(ClimateContext);

  return (
    <div className="climate-stats">
      <div className="temperature">Temperature {temperature}°F</div>
      <div className="humidity">Humidity {humidity}%</div>
    </div>
  );
}

export default ClimateStats;
