import { useState, useEffect } from "react";
import "./App.css";
import { Country } from "./components/country";

function App() {
  useEffect(() => {}, []);

  const country = {
    name: "israel",
    population: 10000000,
    flag: "",
  };
  return (
    <>
      <div>
        <h1> Countries List: </h1>
      </div>
      <div>
        <Country
          name={country.name}
          population={country.population}
          flag={country.flag}
        />
      </div>
    </>
  );
}

export default App;
