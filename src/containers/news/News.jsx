import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Layout } from "../../layout/Layout";
import style from "./style_news.module.css";

export function News() {
  const apiKey = "da09c7a07669433f86613d78bc8721ea";
  const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`;

  const navigate = useNavigate();
  const [news, setNews] = useState({});

  const category = [
    "Tecnologia",
    "Entretenimiento",
    "Deportes",
    "Politica",
    "Negocios",
    "Ciencia",
  ];
  let i = 1;

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Hubo algun error");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data)
        setNews(data);
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
        <title> Noticias </title>
      </Helmet>
      <Layout>
        <h1 className={style.title}> NOTICIAS </h1>

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
            ? news.articles?.map((index) => {
                return (
                  <a key={i++} href={index.url} target="_blank">
                    <div className={style.item}>
                      <h1 className={style.titleNews}>{index.title}</h1>
                      <img
                        className={style.img}
                        src={index.urlToImage}
                        alt="img"
                      />
                      <p className={style.date}>
                        {index.publishedAt.split("T")[0]}
                      </p>
                    </div>
                  </a>
                );
              })
            : false}
        </section>
      </Layout>
    </main>
  );
}
