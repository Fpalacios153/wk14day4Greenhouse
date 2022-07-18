import ReactSlider from "react-slider";
import "./Thermometer.css";
import { useContext } from "react";
import { ClimateContext } from "../../context/ClimateContext";

function Thermometer() {
  const { temperature, setDesiredTemp } = useContext(ClimateContext);

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {"x"}°F</div>
      {/* {console.log('this is running')} */}
      <ReactSlider
        value={temperature}
        onAfterChange={(val) => {
          setDesiredTemp(val);
        }}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;
