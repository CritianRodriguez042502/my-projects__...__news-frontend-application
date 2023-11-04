import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Layout } from "../../layout/Layout";
import style from "./style_leaked_news.module.css";

export function LeakedNews() {
  const navigate = useNavigate();
  const params = useParams().slug;
  const url = `https://server-agency-1203.onrender.com/news/news_category/?slug=${params}`;

  const [allNews, setAllNews] = useState([]);
  const news = [];
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
        if (!res.ok) {
          throw new Error("Hubo algun error");
        }
        if (res.ok) {
          setTimeout(() => {
            setVisibilityNews("initial");
            setVisibilityLoader("none");
          }, 1000);
        }
        return res.json();
      })
      .then((data) => {
        setAllNews(data.data);
      });
  }, [params]);

  if (allNews.length !== 0) {
    allNews?.map((index) => {
      if (news.length < 21) {
        news.push(index);
      }
    });
  }

  function onSubmitSearch(e) {
    e.preventDefault();

    setVisibilityNews("none");
    setVisibilityLoader("initial");
    navigate(`/news/${e.target.search.value}`);
  }

  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> News | {params} </title>
      </Helmet>
      <Layout>
        <h1 className={style.title}> Noticias </h1>

        <article style={{ display: visibilityNews }}>
          <section className={style.containerCategoryes}>
            <aside className={style.containerLinks}>
              {category?.map((index) => {
                return (
                  <p
                    style={
                      params === index
                        ? { background: "#191919", textDecoration: "underline" }
                        : { textDecoration: "none" }
                    }
                    className={style.Linkcategory}
                    onClick={() => {
                      setVisibilityNews("none");
                      setVisibilityLoader("initial");
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
            {news.length !== 0
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
      </Layout>
    </main>
  );
}
