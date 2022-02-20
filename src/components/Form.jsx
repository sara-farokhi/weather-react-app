import { useState } from "react";

const Form = ({ getWeather }) => {
  const [city, setCity] = useState("");
  const passCity = (e, city) => {
    e.preventDefault();
    if (city.trim() !== "") {
      getWeather(city);
    }

    setCity("");
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          passCity(e, city);
        }}
      >
        <input
          type="text"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
