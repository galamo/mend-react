import { useState, useEffect, ChangeEvent } from "react";
import "./App.css";
// import { Country } from "./components/country";

import {
  createBrowserRouter,
  RouterProvider,
  Link,
  BrowserRouter,
} from "react-router-dom";
import UsersPage from "./components/usersPage";

const router = createBrowserRouter([
  { path: "/users", element: <UsersPage /> },
  { path: "/test", element: <div>Test!</div> },
]);

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>
          <Link to="/test">Click here</Link>
        </h1>
        <h1>
          <Link to="/users">sss</Link>
        </h1>
        <RouterProvider router={router} />
      </BrowserRouter>
    </>
  );
}

export default App;
