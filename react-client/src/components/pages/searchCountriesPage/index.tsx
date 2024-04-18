import { useState } from "react";
import axios from "axios";
import { withLoading } from "../../hoc/withLoading";
import { useAsyncApi } from "../../../hooks/useApi";
import countryObj from "./type.json";
import debounce from "lodash/debounce";
type CountryType = typeof countryObj;
console.log(debounce);
const CountriesListWithLoading = withLoading<any>(CountriesList);

async function getCountriesApi(s: string) {
  const url = `http://localhost:2200/countries/search?name=${s}`;
  const result = await axios.get(url);
  return result.data.data;
}
function SearchCountriesPage() {
  const [search, setSearch] = useState("");
  const { isLoading, data, error } = useAsyncApi<Array<CountryType>>(
    getCountriesApi,
    [],
    search
  );
  function searchHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.value) return;
    setSearch(e?.target?.value);
  }
  const searchHandlerDebounce = debounce(searchHandler, 400);
  if (error.errorMessage)
    return <h1 style={{ textAlign: "center" }}> {error.errorMessage} </h1>;
  return (
    <>
      <div style={{ marginTop: "20px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            onChange={searchHandlerDebounce}
            // value={search}
            placeholder="search country..."
            type="text"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        <CountriesListWithLoading countries={data} isLoading={isLoading} />
      </div>
    </>
  );
}

export function CountriesList(props: { countries: Array<CountryType> }) {
  console.log("countries list - render as fetch");
  return (
    <>
      {Array.isArray(props.countries) &&
        props.countries.map((c: CountryType) => {
          return (
            <div
              key={c.name.official}
              style={{ width: "20%", padding: "10px", textAlign: "center" }}
            >
              <h6>{c?.name.official}</h6>
              <img height={150} width={150} src={c?.flags?.png} alt="" />
            </div>
          );
        })}
    </>
  );
}
export default SearchCountriesPage;
