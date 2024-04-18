import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UsersPage from "./components/pages/usersPage";
import CountriesPage from "./components/pages/countriesPage";

import MainNavigation from "./components/app/navigation/MainNavigation";
import Home from "./components/pages/homePage";
import SearchCountriesPage from "./components/pages/searchCountriesPage";
import CountriesStatsPage from "./components/pages/countriesStatsPage";

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
        path: "*",
        element: <div>Not found component</div>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
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
