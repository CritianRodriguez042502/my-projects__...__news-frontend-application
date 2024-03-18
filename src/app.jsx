import React from "react";
import Dom from "react-dom/client";
import { useState, useEffect } from "react";
import Redirects from "./routes/index.routes.jsx";
import "./styles/index.css";

const App = () => {
  const [view, setView] = useState(0);

  useEffect(function () {
    setTimeout(function () {
      setView(1);
    }, 250);
  }, []);
  
  return (
    <article style={{ opacity: view }}>
      <Redirects />
    </article>
  );
};

Dom.createRoot(document.querySelector("#root")).render(<App />);
