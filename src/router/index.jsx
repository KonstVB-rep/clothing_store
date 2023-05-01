import React, { Suspense } from "react";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import { Main } from "../components/Main";
import Spinner from "../components/Spinner/Spinner";
import { GoodsTypePage } from "../components/GoodsTypePage";

const WishList = React.lazy(() =>
  import("../components/WishList").then((module) => ({
    default: module.WishList,
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
        path: "/clothing_store",
        element: <Main />,
      },
      {
        path: "/clothing_store/filter/:type",
        element: <GoodsTypePage />,
      },
      {
        path: "/clothing_store/filter/:type/:id",
        element: (
          <Suspense fallback={<Spinner />}>
            <SingleProductCard />
          </Suspense>
        ),
      },
      {
        path: "/clothing_store/wish_list",
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
