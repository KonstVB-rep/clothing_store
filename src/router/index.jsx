import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import { Main } from "../components/Main";
import { ProductsTypePage } from "../components/ProductsTypePage";
import SingleProductCard from "../components/ProductsTypePage/SingleProductCard";
import { WishList } from "../components/WishList";

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
        element: <ProductsTypePage />,
      },
      {
        path: "/filter/:type/:id",
        element: <SingleProductCard />,
      },
      {
        path: "/wish_list",
        element: <WishList />,
      },
    ],
  },
]);

export default router;
