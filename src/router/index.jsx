import React, { Suspense } from "react";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import Main from "../pages/Main";

const GoodsType = React.lazy(() =>
  import("../pages/GoodsType").then((module) => ({
    default: module.default,
  }))
);

const WishList = React.lazy(() =>
  import("../pages/WishList").then((module) => ({
    default: module.default,
  }))
);

const SingleProduct = React.lazy(() =>
  import("../pages/SingleProduct").then((module) => ({
    default: module.default,
  }))
);

const NotFound = React.lazy(() =>
  import("../pages/NotFound").then((module) => ({
    default: module.default,
  }))
);

const router = createBrowserRouter(
  [
    {
      path: "/",
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
              <GoodsType />
            </Suspense>
          ),
        },
        {
          path: "/filter/:type/:id",
          element: (
            <Suspense fallback={<Spinner />}>
              <SingleProduct />
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
        {
          path: "/*",
          element: (
            <Suspense fallback={<Spinner />}>
              <NotFound />
            </Suspense>
          ),
        },
      ],
    },
  ],
  {
    basename: "/clothing_store",
  }
);

export default router;
