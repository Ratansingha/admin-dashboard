import "./App.css";
import SideBar from "./components/sideBar/SideBar";
import TopBar from "./components/topBar/TopBar";
import Home from "./pages/home/Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

const Layout = () => {
  return (
    <div className="app">
      <TopBar />
      <div className="container">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <UserList />,
        },
        {
          path: "/user/:userId",
          element: <User />,
        },
        {
          path: "/newUser",
          element: <NewUser />,
        },
        {
          path: "/products",
          element: <ProductList />,
        },

        {
          path: "/product/:productId",
          element: <Product />,
        },
        {
          path: "/newProduct",
          element: <NewProduct />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
