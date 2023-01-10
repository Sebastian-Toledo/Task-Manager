import { createBrowserRouter } from "react-router-dom";
import Routes from "./Routes";

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    //element: <ListOrders />,
  },
  {
    path: Routes.ORDER,
    // element: <OrderView/>
  },
  {
    path: Routes.CREATE,
    //element: <CreateOrder/>
  },
  {
    path: Routes.MODIFY,
    //element: <ModifyOrder/>
  },
]);

export default router;
