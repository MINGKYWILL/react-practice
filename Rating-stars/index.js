import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import App from "./App";
import RatingStar from "./RatingStar";

function Test() {
  return (
    <div>
      <RatingStar />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RatingStar maxRating={3} color="yellow" />
    <Test />
  </React.StrictMode>
);
