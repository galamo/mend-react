import axios from "axios";
import { Suspense } from "react";
import { SingleUser } from "../user/index";
import { withLoading } from "../hoc/withLoading";
import { useAsyncApi } from "../../hooks/useApi";
import countryObj from "./type.json";
import { defer, json, useLoaderData, Await } from "react-router-dom";
type CountryType = typeof countryObj;

const CountriesListWithLoading = withLoading<any>(CountriesList);

async function getCountriesApi() {
  const url = "http://localhost:2200/countries/data";
  const result = await axios.get(url);
  return result.data.data;
}
function CountriesPageSuspense() {
  const { data } = useLoaderData();
  // const { isLoading, data, error } = useAsyncApi<Array<SingleUser>>(
  //   getCountriesApi,
  //   []
  // );
  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={data}>
          {(resolvedCountries) => (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 3,
                justifyContent: "center",
              }}
            >
              <CountriesList countries={resolvedCountries} />
            </div>
          )}
        </Await>
      </Suspense>
    </>
  );
}

function CountriesList(props: { countries: Array<CountryType> }) {
  console.log(props.countries, "props");
  return (
    <>
      {Array.isArray(props.countries) &&
        props.countries.map((c: CountryType) => {
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
export default CountriesPageSuspense;

async function loadCountries() {
  const response = await fetch("http://localhost:2200/countries-delay");

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
    throw json(
      { message: "Could not fetch events." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    console.log(resData.data);
    return resData.data;
  }
}

export function loader() {
  return defer({
    data: loadCountries(),
  });
}
