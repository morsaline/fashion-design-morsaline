import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Men from "../pages/Men/Men";
import Women from "../pages/Women/Women";
import Kids from "../pages/Kids/Kids";
import OrderDone from "../pages/OrderDone/OrderDone";
import Login from "../pages/LoginPage/LoginPage";

import Error from "../pages/Error/Error";
import Cart from "../pages/Cart/Cart";
import SingleProductDetails from "../components/SingleProductDetails/SingleProductDetails";
import PaymentCancel from "../pages/payment/paymentCancel";
import PaymentFail from "../pages/payment/paymentFail";
import PaymentSuccess from "../pages/payment/paymentSucces";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      // home page/
      {
        path: "/",
        element: <Home />,
      },
      // pages
      {
        path: "men",
        element: <Men />,
      },
      {
        path: "women",
        element: <Women />,
      },
      {
        path: "kids",
        element: <Kids />,
      },
      // order pages
      {
        path: "orderDone",
        element: <OrderDone />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "*",
        element: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product-details/:_id",
        element: <SingleProductDetails />,
      },
      {
        path: "/payment/success/:transId",
        element: <PaymentSuccess />,
      },
      { path: "/payment/fail", element: <PaymentFail /> },

      {
        path: "/payment/cancel",
        element: <PaymentCancel />,
      },
    ],
  },
]);

export default router;
