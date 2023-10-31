import { Helmet } from "react-helmet";
import { Layout } from "../../layout/Layout";
import { BsFill1CircleFill } from "react-icons/bs";
import { BsFill2CircleFill } from "react-icons/bs";
import { BsFill3CircleFill } from "react-icons/bs";
import news from "../../assents/images/home/news.png";
import newsVideo from "../../assents/videos/bbc-news-video.mp4";
import style from "./style_home.module.css";

export function Home() {
  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Inicio </title>
      </Helmet>

      <Layout>
        <section className={style.presentationContainer}>
          <aside className={style.presentationContent}>
            <h1 className={style.title}> BBC NEWS</h1>
            <p className={style.textPresentation}>
              BBC News es la rama informativa de la British Broadcasting
              Corporation (BBC), una de las instituciones de medios más grandes
              y respetadas a nivel mundial. Se especializa en proporcionar
              noticias imparciales, informativas y de alta calidad tanto a nivel
              nacional como internacional. La cobertura de BBC News abarca una
              amplia gama de temas, desde política y economía hasta cultura,
              ciencia, tecnología, deportes y mucho más.
            </p>
          </aside>

          <aside className={style.presentationImage}>
            <img className={style.img} src={news} alt="img" />
          </aside>

          <div className={style.circule}></div>
        </section>

        <section className={style.benefitsContainer}>
          <aside className={style.item}>
            <h1 className={style.icon}>
              <BsFill1CircleFill />
            </h1>
            <h2 className={style.titlesBenefits}>Credibilidad y Objetividad</h2>
            <p className={style.textBenefits}>
              BBC News es reconocida por su imparcialidad y credibilidad en la
              presentación de noticias. Destacar este punto fortalecerá la
              confianza de tus usuarios en la veracidad de la información que
              estás proporcionando a través de la API de BBC News.
            </p>
          </aside>
          <aside className={style.item}>
            <h1 className={style.icon}>
              <BsFill2CircleFill />
            </h1>
            <h2 className={style.titlesBenefits}>
              Accesibilidad y <br />Variedad de Formatos
            </h2>
            <p className={style.textBenefits}>
              La plataforma se adapta a una amplia gama de plataformas y
              formatos, incluyendo contenido multimedia y en línea. Destacar la
              facilidad de acceso a la información a través de diferentes
              dispositivos y la presentación dinámica de la información puede
              ser un punto fuerte para tu web.
            </p>
          </aside>
          <aside className={style.item}>
            <h1 className={style.icon}>
              <BsFill3CircleFill />
            </h1>
            <h2 className={style.titlesBenefits}>
              Cobertura Global y <br />Diversidad
            </h2>
            <p className={style.textBenefits}>
              Es un sistema que ofrece una cobertura amplia y diversa de
              noticias, no solo a nivel nacional, sino también a nivel
              internacional. Puedes resaltar la amplitud de temas que abarca,
              desde política y economía hasta cultura, ciencia, tecnología y
              más, lo que brinda a tus usuarios una visión integral de los
              acontecimientos mundiales.
            </p>
          </aside>
        </section>

        <section className={style.videoContainer}>
          <h2 className={style.titleVideo}> Siempre al dia </h2>
          <video controls="controls">
            <source src={newsVideo} type="video/mp4" />
          </video>
          <div className={style.circule2}></div>
        </section>
      </Layout>
    </main>
  );
}
