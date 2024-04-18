import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UsersPage from "./components/pages/usersPage";
import CountriesPage from "./components/pages/countriesPage";

import MainNavigation from "./components/app/navigation/MainNavigation";
import Home from "./components/pages/homePage";
import SearchCountriesPage from "./components/pages/searchCountriesPage";
import CountriesStatsPage from "./components/pages/countriesStatsPage";
import CountriesLoaderPage, {
  loader as countriesLoader,
} from "./components/pages/countriesLoaderPage";
import SettingsProvider from "./components/providers/settingsProvider";
import SettingsPage from "./components/pages/settingsPage";
import { Provider } from "react-redux";
import { store } from "./store";
import Login from "./components/pages/loginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/countries",
        element: <CountriesPage />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/search-countries",
        element: <SearchCountriesPage />,
      },
      {
        path: "/stats",
        element: <CountriesStatsPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
      {
        path: "/countries-loader-page",
        element: <CountriesLoaderPage />,
        loader: countriesLoader,
      },

      {
        path: "*",
        element: <div>Not found component</div>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <SettingsProvider>
          <RouterProvider router={router} />
        </SettingsProvider>
      </Provider>
    </>
  );
}

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default App;
