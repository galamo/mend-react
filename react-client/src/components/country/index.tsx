import { ImageComponent } from "../imageComponent";
import css from "./style.module.css";
type CountryType = {
  name: string;
  population: number;
  flag: string;
};
export function Country(props: CountryType) {
  const { name, population, flag } = props;
  return (
    <div className={css.countryCard}>
      <h4> Country Name: {name}</h4>
      <h4> Population: {population}</h4>
      <ImageComponent image={flag} />
    </div>
  );
}
