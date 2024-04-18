import { CountryType } from "..";

export function calcTotalPopulation(countries: Array<CountryType>) {
  console.log(countries);
  console.log("Long Calculation is executed!");
  if (!Array.isArray(countries)) return;
  return countries.reduce((total, currentCountry) => {
    if (!currentCountry.population) return total;
    return total + Number(currentCountry.population || 0);
  }, 0);
}
