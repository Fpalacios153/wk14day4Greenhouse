import { createContext, useState, useEffect } from "react";

export const ClimateContext = createContext();

export default function ClimateProvider(props) {
  const [temperature, setTemperature] = useState(50);
  const [humidity, setHumidity] = useState(40);
  const [desiredTemp, setDesiredTemp] = useState(0);
  const [desiredHumidity, setDesiredHumidity] = useState(0);

  useEffect(() => {
    // console.log(desiredTemp);
    const tempChange = setTimeout(() => {
      console.log("desiredTemp", desiredTemp, "temperature", temperature);
      if (desiredTemp > temperature) {
        setTemperature((prevTemp) => prevTemp + 1);
      }
      if (desiredTemp < temperature) {
        setTemperature((prevTemp) => prevTemp - 1);
      }
    }, 1000);
    return () => clearTimeout(tempChange);
  }, [desiredTemp, temperature]);

  useEffect(() => {
    console.log("humidity", humidity, "desiredHumidity", desiredHumidity);
    const humidityChange = setTimeout(() => {
      if (desiredHumidity > humidity) {
        setHumidity((prevHumi) => prevHumi + 1);
      }
      if (desiredHumidity < humidity) {
        setHumidity((prevHumi) => prevHumi - 1);
      }
    }, 500);
    return () => clearTimeout(humidityChange);
  }, [desiredHumidity, humidity]);

  return (
    <ClimateContext.Provider
      value={{
        temperature,
        setTemperature,
        humidity,
        setHumidity,
        setDesiredHumidity,
        desiredTemp,
        setDesiredTemp
      }}
    >
      {props.children}
    </ClimateContext.Provider>
  );
}

// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%
