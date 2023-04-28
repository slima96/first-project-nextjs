import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { Columns, Github } from "lucide-react";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p style={{ textAlign: "justify" }}>
          Olá, sou um desenvolvedor de 27 anos e estou cursando Sistemas de
          Informação. Tenho uma grande paixão por programação e adoro criar
          programas que possam resolver problemas e facilitar a vida das
          pessoas.
          <br></br>
          <br></br>
          Neste momento, estou me aperfeiçoando em React JS e Next.js, dois
          frameworks populares para desenvolvimento web. Dedico-me a aprimorar
          minhas habilidades e conhecimentos nesta área, porque acredito que o
          domínio dessas tecnologias me permitirá criar soluções ainda mais
          inovadoras e eficazes.
        </p>
        <div 
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row"
          }}
        >
          <a 
            style={{marginRight: 20}}
            href="https://github.com/slima96"
            target="_blank"
          >
            Confira também meu GitHub
          </a>
          <Github />
        </div>
      </section>
    </Layout>
  );
}
