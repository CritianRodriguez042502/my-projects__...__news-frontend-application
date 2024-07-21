import { CiMemoPad } from 'react-icons/ci';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import style from './style_footer.module.css';

export function Footer() {
    return (
        <main>
            <section className={style.containerContact}>
                <h1> !BBC NEWS!</h1>
                <p>
                    Exploro la API de BBC News para ofrecer acceso a información actualizada y
                    relevante que pasa en el mundo.
                </p>
                <div>
                    <button>
                        <a href="https://newsapi.org/" target="_blank" rel="noreferrer">
                            WEB
                        </a>
                    </button>
                </div>
            </section>

            <section className={style.containerFooter}>
                <h1>
                    <CiMemoPad />
                </h1>
                <p>
                    Aprendo todos los dias. <br /> ¿Que esperas? creemos un proyecto juntos
                </p>
                <aside className={style.containerIcons}>
                    <a
                        className={style.icon}
                        rel="noreferrer"
                        href="https://www.facebook.com/cristian.rodriguezbenitez.5/"
                        target="_blank"
                    >
                        <AiFillFacebook />
                    </a>
                    <a
                        className={style.icon}
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/rodriguezbenitez/"
                        target="_blank"
                    >
                        <AiFillLinkedin />
                    </a>
                    <a
                        className={style.icon}
                        rel="noreferrer"
                        href="https://github.com/CritianRodriguez042502"
                        target="_blank"
                    >
                        <AiFillGithub />
                    </a>
                    <a
                        className={style.icon}
                        rel="noreferrer"
                        href="https://www.instagram.com/cristianrodriguez0102/"
                        target="_blank"
                    >
                        <AiOutlineInstagram />
                    </a>
                </aside>
                <p className={style.creator}> Creado por Cristian Rodriguez 2023</p>
            </section>
        </main>
    );
}
