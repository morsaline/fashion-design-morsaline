import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Men from "../pages/Men/Men";
import Women from "../pages/Women/Women";
// import OrderDone from "../pages/OrderDone/OrderDone";
import { createBrowserRouter } from "react-router-dom";
import Kids from "../pages/Kids/Kids";
import OrderDone from "../pages/OrderDone/OrderDone";
import Login from "../pages/LoginPage/LoginPage";

// import Error from "../pages/Error/Error";
import Error from "../pages/Error/Error";
import Cart from "../pages/Cart/Cart";
import SingleProductDetails from "../components/SingleProductDetails/SingleProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      // home page/
      {
        path: "/",
        element: <Home></Home>,
      },
      // pages
      {
        path: "men",
        element: <Men></Men>,
      },
      {
        path: "women",
        element: <Women></Women>,
      },
      {
        path: "kids",
        element: <Kids></Kids>,
      },
      // order pages
      {
        path: "orderDone",
        element: <OrderDone></OrderDone>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/product-details/:_id",
        element: <SingleProductDetails></SingleProductDetails>,
      },
    ],
  },
]);

export default router;
