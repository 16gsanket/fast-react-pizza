import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Error from "./ui/Error";
import Cart from "./features/cart/Cart";
import { loader as MenuLoader } from "./features/menu/Menu";
import CreateOrder, {action as CreateOrderAction} from "./features/order/CreateOrder";
import {action as UpdatePriorityAction} from "./features/order/UpdateItemPriority";
import Order , {loader as OrderLoader} from "./features/order/Order";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        errorElement: <Error />,
        loader: MenuLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action:CreateOrderAction
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader:OrderLoader,
        errorElement:<Error/>,
        action:UpdatePriorityAction
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
