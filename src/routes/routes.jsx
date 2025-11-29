import { createBrowserRouter } from "react-router";
import App from "../App";
import mainLayouts from "../layouts/mainLayouts";
import home from "../pages/home";
import Favourites from "../pages/Favourites";
import About from "../pages/About";
import PhoneDetails from "../pages/PhoneDetails";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: mainLayouts,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        Component: home,
        hydrateFallbackElement: <p>loading please wait...</p>,
        loader: ()=> fetch('../phones.json'),
      },
      {
        path: "/favourites",
        Component: Favourites,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/phone-details/:id",
        Component: PhoneDetails,
        loader: ()=> fetch('../phones.json'),
      },
    ],
  },
]);
