import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { reviewProduct } from "./loader/reviewProduct";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Here is your toast.");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: reviewProduct,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "about", element: <About></About> },
      {
        path: "/shop",
        element: <Shop></Shop>,
        loader: () => fetch("products.json"),
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />,
    <Toaster />
  </>
);
