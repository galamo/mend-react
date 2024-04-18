import axios from "axios";
import { withLoading } from "../../hoc/withLoading";
import { useAsyncApi } from "../../../hooks/useApi";
import countryObj from "./type.json";
import { calcTotalPopulation } from "./utils/calcTotalPopulation";
import { useMemo, useState } from "react";
import debounce from "lodash/debounce";

export type CountryType = typeof countryObj;

const TotalPopulationStatsWithLoading = withLoading<any>(TotalPopulationStats);

async function getCountriesApi(s: string) {
  const url = `http://localhost:2200/countries/search?name=${s}`;
  const result = await axios.get(url);
  return result.data.data;
}
function CountriesStatsPage() {
  const [showFlags, setShowFlags] = useState(false);
  const [search, setSearch] = useState("");
  const { isLoading, data, error } = useAsyncApi<Array<CountryType>>(
    getCountriesApi,
    [],
    search
  );
  // const population = calcTotalPopulation(data);
  const result = useMemo(() => {
    return calcTotalPopulation(data);
  }, [data]);
  
  // useCallback
  function searchHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.value) return;
    setSearch(e?.target?.value);
  }

  if (error.errorMessage)
    return <h1 style={{ textAlign: "center" }}> {error.errorMessage} </h1>;
  const searchHandlerDebounce = debounce(searchHandler, 400);

  return (
    <>
      <div>
        <div style={{ marginTop: "20px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input
              onChange={searchHandlerDebounce}
              placeholder="search country..."
              type="text"
            />
          </div>
        </div>
        <button
          onClick={() => {
            setShowFlags(!showFlags);
          }}
        >
          showFlags
        </button>
        {showFlags && <h2> Total Population - CLick for flags </h2>}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        <TotalPopulationStatsWithLoading total={result} isLoading={isLoading} />
      </div>
    </>
  );
}

function TotalPopulationStats(props: { total: number }) {
  return <h1> {props.total}</h1>;
}

export default CountriesStatsPage;
