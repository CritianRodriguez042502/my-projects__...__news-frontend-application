import React from "react";
import { useState, useEffect } from "react";
import Dom from "react-dom/client";
import Redirects from "./routes/index";
import "./styles/style.css";

const App = () => {
  const [view, setView] = useState(0);

  useEffect(function () {
    setTimeout(function () {
      setView(1);
    }, 1000);
  }, []);
  
  return (
    <article style={{ opacity: view }}>
      <Redirects />
    </article>
  );
};

Dom.createRoot(document.querySelector("#root")).render(<App />);
