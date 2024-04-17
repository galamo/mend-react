import axios from "axios";
import { SingleUser } from "../user/index";
import { withLoading } from "../hoc/withLoading";
import { useAsyncApi } from "../../hooks/useApi";
import countryObj from "./type.json";
type CountryType = typeof countryObj;

const CountriesListWithLoading = withLoading<any>(CountriesList);

async function getCountriesApi() {
  const url = "http://localhost:2200/countries/data";
  const result = await axios.get(url);
  return result.data.data;
}
function CountriesPage() {
  const { isLoading, data, error } = useAsyncApi<Array<SingleUser>>(
    getCountriesApi,
    []
  );
  if (error.errorMessage)
    return <h1 style={{ textAlign: "center" }}> {error.errorMessage} </h1>;
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        <CountriesListWithLoading users={data} isLoading={isLoading} />
      </div>
    </>
  );
}

function CountriesList(props: { users: Array<CountryType> }) {
  return (
    <>
      {Array.isArray(props.users) &&
        props.users.map((c: CountryType) => {
          return (
            <div style={{ width: "20%", padding: "10px", textAlign: "center" }}>
              <h6>{c?.name.official}</h6>
              <img height={150} width={150} src={c?.flags?.png} alt="" />
            </div>
          );
        })}
    </>
  );
}
export default CountriesPage;
