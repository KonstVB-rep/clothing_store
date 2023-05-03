import React, { Suspense } from "react";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import { Main } from "../components/Main";
import Spinner from "../components/Spinner/Spinner";
// import { GoodsTypePage } from "../components/GoodsTypePage";

const GoodsTypePage = React.lazy(() =>
  import("../components/GoodsTypePage").then((module) => ({
    default: module.GoodsTypePage,
  }))
);

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

const NotFoundPage = React.lazy(() =>
  import("../components/404").then((module) => ({
    default: module.NotFoundPage,
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
        element: (
          <Suspense fallback={<Spinner />}>
            <GoodsTypePage />
          </Suspense>
        ),
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
      {
        path: "/clothing_store/*",
        element: (
          <Suspense fallback={<Spinner />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
