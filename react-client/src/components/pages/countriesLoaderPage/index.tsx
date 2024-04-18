import axios from "axios";
import countryObj from "./type.json";
import { Suspense } from "react";
import { CountriesList } from "../searchCountriesPage";
import { Await, json, useLoaderData, defer } from "react-router-dom";
import { Loading } from "../../ui/loading";
type CountryType = typeof countryObj;

function CountriesLoaderPage() {
  const { data } = useLoaderData();

  return (
    <>
      <h1> Countries loader example</h1>
      <Suspense fallback={<Loading />}>
        <Await resolve={data}>
          {(resolvedCountries) => {
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
                  <CountriesList countries={resolvedCountries} />;
                </div>
              </>
            );
          }}
        </Await>
      </Suspense>
    </>
  );
}

export default CountriesLoaderPage;

export async function loadCountries(): Promise<Array<CountryType>> {
  try {
    const url = "http://localhost:2200/countries-delay";
    const { data } = await axios.get(url);
    return data.data;
  } catch {
    throw json({ message: "something went wrong" });
  }
}

export function loader() {
  return defer({
    data: loadCountries(),
  });
}
