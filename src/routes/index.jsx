import { HashRouter, Routes, Route } from "react-router-dom";
import { Home, News, LeakedNews } from "../containers/index";

function Redirects() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/news" Component={News} />
        <Route path="/news/:slug" Component={LeakedNews} />
      </Routes>
    </HashRouter>
  );
}

export default Redirects;
