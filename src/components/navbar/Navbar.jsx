import { NavLink } from "react-router-dom";
import { useState } from "react";
import { DiJsBadge } from "react-icons/di";
import { BiNews } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import style from "./style_navbar.module.css";

export function Navbar() {
  const [apperance, setApperance] = useState("none");

  const onClickApperanceNavbar = (e) => {
    if (apperance === "none") {
      setApperance("flex");
    } else {
      setApperance("none");
    }
  };

  const navigate = (e) => {
    window.setTimeout(() => {
      setApperance("none");
    }, 300);
  };

  return (
    <main>
      <section className={style.containerNavbarMobile}>
        <aside className={style.containerIcons}>
          <div onClick={onClickApperanceNavbar} className={style.iconClose}>
            <AiOutlineMenu />
          </div>
          <div className={style.iconMain}>
            <BiNews />
          </div>
        </aside>

        <aside style={{ display: apperance }} className={style.containerFixed}>
          <nav className={style.containerLinks}>
            <NavLink onClick={navigate} className={style.links} to={"/"}>
              Inicio
            </NavLink>
            <NavLink onClick={navigate} className={style.links} to={"/news"}>
              Noticias
            </NavLink>
          </nav>
        </aside>
      </section>

      <section className={style.containerNavbarDesktop}>
        <div className={style.iconMain}>
          <BiNews />
        </div>
        <nav className={style.containerLinks}>
          <NavLink onClick={navigate} className={style.links} to={"/"}>
            Inicio
          </NavLink>
          <NavLink onClick={navigate} className={style.links} to={"/news"}>
            Noticias
          </NavLink>
        </nav>
      </section>
    </main>
  );
}
