import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import Browse from "./Pages/Browse";
import Header from "./components/Header";

export const Router = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      {/* <Header /> */}
      <RouterProvider router={appRouter} />
    </div>
  );
};
