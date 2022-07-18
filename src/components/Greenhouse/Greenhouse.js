import dayImage from "./images/greenhouse-day.jpg";
import nightImage from "./images/greenhouse-night.jpg";
import "./Greenhouse.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import LightSwitch from "./LightSwitch";
import ClimateStats from "./ClimateStats";

function Greenhouse() {
  const { setThemeName, themeName } = useContext(ThemeContext);
  return (
    <section>
      <img
        className="greenhouse-img"
        src={themeName === "night" ? nightImage : dayImage}
        alt="greenhouse"
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
