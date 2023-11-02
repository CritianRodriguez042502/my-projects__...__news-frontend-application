import React from "react";
import Dom from "react-dom/client";
import Redirects  from "./routes/index";
import "./styles/style.css";

Dom.createRoot(document.querySelector("#root")).render(
  <>
    <Redirects />
  </>
);
