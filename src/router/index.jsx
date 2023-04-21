import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import { Main } from "../components/Main";
import { FilterProducts } from "../components/FilterProducts";

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
        element: <FilterProducts />,
      },
    ],
  },
]);

export default router;
