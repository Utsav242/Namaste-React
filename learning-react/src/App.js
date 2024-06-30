import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import BodyCom from "./components/BodyCom";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import Menu from "./components/Menu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <div className="container">
     <Outlet />
    </div>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children:[
      {
        path: "/",
        element: <BodyCom />,
    
      },
      {
        path: "/about",
        element: <About />,
    
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <Menu />,
      },
    ],
    errorElement: <Error/>,
  },

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
