import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import { Main } from "../components/Main";
import { ProductsTypePage } from "../components/ProductsTypePage";
import SingleProductCard from "../components/ProductsTypePage/SingleProductCard";

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
    ],
  },
]);

export default router;
