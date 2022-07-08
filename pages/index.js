import Head from "next/head";
import AboutMe from "../components/AboutMe";
import Articles from "../components/Articles";
import Projects from "../components/Projects";
import Companies from "../components/Companies";
import GetInTouch from "../components/GetInTouch";
import Header from "../components/Header";
import Presentation from "../components/Presentation";

export default function Home({ articles = [], projects = [] }) {
  return (
    <div className="sm:container mx-auto px-5 md:px-10 2xl:max-w-[1320px]">
      <Head>
        <title>Josep Viciana</title>
        <meta name="description" content="Josep Viciana, senior developer" />
        <meta property="og:title" content="Josep Viciana" />
        <meta
          property="og:description"
          content="Barcelona / Remote Web and Android developer"
        />
        <meta property="og:url" content="https://www.viciana.me" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@emmgfx" />
        <meta
          property="og:image"
          content="https://www.viciana.me/screenshot.png"
        />
      </Head>
      <Header />
      <div className="h-16" />
      <Presentation />
      <AboutMe />
      <div className="h-16" />
      <Projects projects={projects} />
      <div className="h-16" />
      <Companies />
      <div className="h-16" />
      <Articles articles={articles} />
      <div className="h-16" />
      <GetInTouch />
    </div>
  );
}

export async function getStaticProps() {
  const api = "https://emm-gfx.net/wp-json/wp/v2";

  const articles = await fetch(`${api}/posts`).then((res) => res.json());

  const projects = await fetch(`${api}/project?_embed`).then((res) =>
    res.json()
  );

  return {
    props: {
      articles: articles.map((article) => ({ ...article })),
      projects: projects.map((project) => ({
        id: project.id,
        title: project.title.rendered,
        description: project.content.rendered,
        image: {
          url: project._embedded["wp:featuredmedia"][0].source_url,
          width: project._embedded["wp:featuredmedia"][0].media_details.width,
          height: project._embedded["wp:featuredmedia"][0].media_details.height,
        },
        url: project.acf.project_url,
      })),
    },
    revalidate: 86400, // 1 day
  };
}
