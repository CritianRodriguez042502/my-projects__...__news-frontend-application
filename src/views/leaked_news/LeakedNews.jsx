import { useState, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import style from './style_leaked_news.module.css';

export function LeakedNews() {
    const navigate = useNavigate();
    const params = useParams().slug;

    const url = `${import.meta.env.VITE_URL_BACKEND_DJANGO}/news/news_category/?slug=${params}`;

    const [showNews, setShowNews] = useState(false);
    const [news, setNews] = useState([]);
    const [search, setSearch] = useState('');

    const categories = useMemo(
        () => ['Tecnologia', 'Entretenimiento', 'Deportes', 'Cultura', 'Negocios', 'Ciencia'],
        []
    );

    useEffect(() => {
        if (!categories.some((item) => item.toLocaleLowerCase() === params.toLocaleLowerCase())) {
            setSearch(params);
        }

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
    }, [params]);

    function onChangeSearch(e) {
        setSearch(e.target.value);
    }

    function changeBetweenCategories(item) {
        if (item !== params) {
            setShowNews(false);
            navigate(`/news/${item}`);
        }
    }

    function onSubmitSearch(e) {
        e.preventDefault();

        setShowNews(false);
        navigate(`/news/${String(e.target.search.value).toLocaleLowerCase()}`);
    }

    return (
        <>
            <Helmet>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title> News | {params} </title>
            </Helmet>

            <h1 className={style.title}> Noticias </h1>

            {showNews ? (
                <>
                    <section className={style.containerCategoryes}>
                        <aside className={style.containerLinks}>
                            {categories?.map((item, index) => {
                                return (
                                    <p
                                        style={
                                            item === params
                                                ? {
                                                      background: '#191919',
                                                      textDecoration: 'underline',
                                                      cursor: 'default',
                                                  }
                                                : null
                                        }
                                        className={style.Linkcategory}
                                        onClick={() => changeBetweenCategories(item)}
                                        key={index}
                                    >
                                        {item}
                                    </p>
                                );
                            })}
                        </aside>

                        <form className={style.containerSearch} onSubmit={onSubmitSearch}>
                            <input
                                name="search"
                                type="text"
                                value={search}
                                onChange={onChangeSearch}
                                required
                            />
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
        </>
    );
}
