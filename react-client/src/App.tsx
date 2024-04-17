import { useState, useEffect, ChangeEvent } from "react";
// import "./App.css";
// import { Country } from "./components/country";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UsersPage from "./components/usersPage";
import CountriesPage from "./components/countriesPage";

import MainNavigation from "./navigation/MainNavigation";
import Home from "./components/home";

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
