import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import BodyCom from "./components/BodyCom";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    <BodyCom />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
