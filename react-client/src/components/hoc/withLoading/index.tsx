import { useState, useEffect, ChangeEvent } from "react";

import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([{ path: "/", element: <HomePage /> }]);

//  new Type
export type WithLoadingProps = {
  isLoading: boolean;
};
export function withLoading<T extends WithLoadingProps>(
  WrappedComponent: React.FunctionComponent<T>
) {
  return function (props: T) {
    const { isLoading } = props;
    return isLoading ? <CircularProgress /> : <WrappedComponent {...props} />;
  };
}
