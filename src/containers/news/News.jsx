import { Helmet } from "react-helmet";
import { Layout } from "../../layout/Layout";
import style from "./style_news.module.css";

const apiKey = "6a209fc13bf14467b5b601f352d365ce"
const urlTest = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6a209fc13bf14467b5b601f352d365ce"

export function News() {
  
  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Noticias... </title>
      </Helmet>
      <Layout>
        <h1 className={style.title}> NOTICIAS </h1>
      </Layout>
    </main>
  );
}
