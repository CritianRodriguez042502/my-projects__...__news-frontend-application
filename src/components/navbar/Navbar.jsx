import Popup from 'reactjs-popup';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiNews } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';

import style from './style_navbar.module.css';

export function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const onClickShowMenu = () => {
        setShowMenu(!showMenu);
    };

    const navigate = () => {
        setTimeout(() => {
            setShowMenu(false);
        }, 500);
    };

    return (
        <>
            <section className={style.mobileNavbar}>
                <aside className={style.navIconToggle}>
                    <AiOutlineMenu
                        size={40}
                        color="#1A1A1A"
                        cursor={'pointer'}
                        onClick={onClickShowMenu}
                    />

                    <BiNews size={40} color="#b50938" />
                </aside>

                <Popup
                    modal
                    nested
                    lockScroll
                    open={showMenu}
                    onClose={() => setShowMenu(false)}
                    overlayStyle={{
                        background: 'rgba(0, 0, 0, 0.2)',
                        backdropFilter: 'blur(5px)',
                    }}
                    position="center center"
                >
                    <nav className={style.subMenu}>
                        <NavLink onClick={navigate} className={style.subMenuLinks} to={'/'}>
                            Inicio
                        </NavLink>

                        <NavLink onClick={navigate} className={style.subMenuLinks} to={'/news'}>
                            Noticias
                        </NavLink>
                    </nav>
                </Popup>
            </section>

            <section className={style.desktopNavbar}>
                <BiNews size={40} color="#b50938" />

                <nav className={style.desktopNavItems}>
                    <NavLink className={style.desktopNavItemsLinks} to={'/'}>
                        Inicio
                    </NavLink>

                    <NavLink className={style.desktopNavItemsLinks} to={'/news'}>
                        Noticias
                    </NavLink>
                </nav>
            </section>
        </>
    );
}
