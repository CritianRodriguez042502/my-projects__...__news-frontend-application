import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Layout } from "../../layout/Layout";
import style from "./style_news.module.css";

export function News() {
  const url = "https://server-agency-1203.onrender.com/news/initial_news/";

  const navigate = useNavigate();
  const [news, setNews] = useState({});

  const [visibilityNews, setVisibilityNews] = useState("none");
  const [visibilityLoader, setVisibilityLoader] = useState("initial");

  const category = [
    "Tecnologia",
    "Entretenimiento",
    "Deportes",
    "Cultura",
    "Negocios",
    "Ciencia",
  ];

  let i = 1;

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          setTimeout(() => {
            setVisibilityNews("initial");
            setVisibilityLoader("none");
          }, 1000);
        }

        if (!res.ok) {
          throw new Error("Error repentino");
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
        <title> News | Articulos </title>
      </Helmet>
      <Layout>
        <h1 className={style.title}> NOTICIAS </h1>

        <article style={{ display: visibilityNews }}>
          <section className={style.containerCategoryes}>
            <aside className={style.containerLinks}>
              {category?.map((index) => {
                return (
                  <p
                    className={style.Linkcategory}
                    onClick={() => {
                      navigate(`/news/${index}`);
                    }}
                    key={i++}
                  >
                    {index}
                  </p>
                );
              })}
            </aside>

            <aside className={style.containerSearch}>
              <form onSubmit={onSubmitSearch}>
                <input name="search" type="text" required />
                <button type="submit">Buscar</button>
              </form>
            </aside>
          </section>

          <section className={style.containerNews}>
            {Object.keys(news).length !== 0
              ? news?.map((index) => {
                  return (
                    <a key={i++} href={index.url} target="_blank">
                      <div className={style.item}>
                        <img
                          className={style.img}
                          src={index.urlToImage}
                          alt="img"
                        />
                        <h1 className={style.titleNews}>{index.title}</h1>
                        <p className={style.date}>
                          {index.publishedAt.split("T")[0]}
                        </p>
                      </div>
                    </a>
                  );
                })
              : false}
          </section>
        </article>

        <article style={{ display: visibilityLoader }}>
          <div className={style.containerLoader}>
            <span className={style.loader}></span>
          </div>
        </article>

        <div className={style.circule}></div>
      </Layout>
    </main>
  );
}
