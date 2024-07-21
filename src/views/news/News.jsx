import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import style from './style_news.module.css';

export function News() {
    const navigate = useNavigate();
    const url = `${import.meta.env.VITE_URL_BACKEND_DJANGO}/news/initial_news/`;

    const [showNews, setShowNews] = useState(false);
    const [news, setNews] = useState([]);

    const categories = useMemo(
        () => ['Tecnologia', 'Entretenimiento', 'Deportes', 'Cultura', 'Negocios', 'Ciencia'],
        []
    );

    useEffect(() => {
        fetch(url)
            .then((res) => {
                if (res.ok) {
                    setShowNews(true);
                }

                return res.json();
            })
            .then((data) => {
                setNews(data.data);
            });
    }, []);

    function onSubmitSearch(e) {
        e.preventDefault();
        navigate(`/news/${e.target.search.value}`);
    }

    return (
        <main>
            <Helmet>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title> News | Sections </title>
            </Helmet>

            <h1 className={style.title}> NOTICIAS </h1>

            {showNews ? (
                <>
                    <section className={style.containerCategoryes}>
                        <aside className={style.containerLinks}>
                            {categories?.map((item, index) => {
                                return (
                                    <p
                                        className={style.Linkcategory}
                                        onClick={() => {
                                            navigate(`/news/${item}`);
                                        }}
                                        key={index}
                                    >
                                        {item}
                                    </p>
                                );
                            })}
                        </aside>

                        <form className={style.containerSearch} onSubmit={onSubmitSearch}>
                            <input name="search" type="text" required />
                            <button type="submit">Buscar</button>
                        </form>
                    </section>

                    <section className={style.containerNews}>
                        {news.length > 0 ? (
                            <>
                                {news?.map((item, index) => {
                                    return (
                                        <a
                                            key={index}
                                            href={item.url}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <div className={style.item}>
                                                <img
                                                    className={style.img}
                                                    src={item.urlToImage}
                                                    alt="img"
                                                />
                                                <h1 className={style.titleNews}>{item.title}</h1>
                                                <p className={style.date}>
                                                    {item.publishedAt.split('T')[0]}
                                                </p>
                                            </div>
                                        </a>
                                    );
                                })}
                            </>
                        ) : (
                            <h3 style={{ textAlign: 'center' }}>No se encontraron resultados.</h3>
                        )}
                    </section>
                </>
            ) : (
                <div className={style.containerLoader}>
                    <span className={style.loader}></span>
                </div>
            )}

            <div className={style.circule}></div>
        </main>
    );
}
