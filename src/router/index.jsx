import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import { Main } from "../components/Main";
import React, { Suspense } from "react";
import Spinner from "../components/Spinner/Spinner";

const WishList = React.lazy(() =>
  import("../components/WishList").then((module) => ({
    default: module.WishList,
  }))
);

const ProductsTypePage = React.lazy(() =>
  import("../components/ProductsTypePage").then((module) => ({
    default: module.ProductsTypePage,
  }))
);

const SingleProductCard = React.lazy(() =>
  import("../components/SingleProductCard").then((module) => ({
    default: module.SingleProductCard,
  }))
);

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/filter/:type",
        element: (
          <Suspense fallback={<Spinner />}>
            <ProductsTypePage />
          </Suspense>
        ),
      },
      {
        path: "/filter/:type/:id",
        element: (
          <Suspense fallback={<Spinner />}>
            <SingleProductCard />
          </Suspense>
        ),
      },
      {
        path: "/wish_list",
        element: (
          <Suspense fallback={<Spinner />}>
            <WishList />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
