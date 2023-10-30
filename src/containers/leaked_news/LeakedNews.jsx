import { Helmet } from "react-helmet";
import { Layout } from "../../layout/Layout";
import "./style_leaked_news.module.css";

export function LeakedNews() {
  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Busqueda... </title>
      </Helmet>
      <Layout>
        <h1> Leaked news</h1>
      </Layout>
    </main>
  );
}
