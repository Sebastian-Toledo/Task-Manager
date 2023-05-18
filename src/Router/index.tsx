import { createBrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import HomePage from "../Pages/HomePage";
import OrderPage from "../Pages/OrderPage";
import CreatePage from "../Pages/CreatePage";
import ModifyPage from "../Pages/ModifyPage";
import HistorialPage from "../Pages/HistorialPage";

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <HomePage />,
  },
  {
    path: `${Routes.ORDER}/:orderId`,
    element: <OrderPage />,
  },
  {
    path: Routes.CREATE,
    element: <CreatePage />,
  },
  {
    path: `${Routes.MODIFY}/:orderId`,
    element: <ModifyPage />,
  },
  {
    path: `${Routes.HISTORIAL}/:orderId`,
    element: <HistorialPage />,
  },
]);

export default router;
