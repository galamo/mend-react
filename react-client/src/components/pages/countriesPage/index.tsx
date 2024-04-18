import axios from "axios";
import { SingleUser } from "../../ui/user/index";
import { withLoading } from "../../hoc/withLoading";
import { useAsyncApi } from "../../../hooks/useApi";
import countryObj from "./type.json";
import { CountriesList } from "../searchCountriesPage";
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
        <CountriesListWithLoading countries={data} isLoading={isLoading} />
      </div>
    </>
  );
}

export default CountriesPage;
