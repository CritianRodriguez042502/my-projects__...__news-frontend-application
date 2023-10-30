import { Helmet } from "react-helmet";
import { Layout } from "../../layout/Layout";
import style from "./style_news.module.css";

export function News() {
  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Noticias... </title>
      </Helmet>
      <Layout>
        <h1 className={style.title}> News all </h1>
      </Layout>
    </main>
  );
}
