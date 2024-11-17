import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import BodyCom from "./components/BodyCom";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import Menu from "./components/Menu";
import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  // authentication

  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    // make an API call and send username and password.
    const data = {
      name: "Utsav Goel",
    };
    setUserInfo(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
      <div className="app">
        <Header />
        <div className="container">
          <Outlet />
        </div>
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
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
      {
        path: "/grocery",
        element: (
          <Suspense
            fallback={
              <>
                <h1>loading....</h1>
              </>
            }
          >
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
