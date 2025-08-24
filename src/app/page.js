import { ArticlesList } from "@/components/ArticlesList";
import { Card } from "@/components/Card";
import { Intro, IntroBottom, IntroText, IntroTitle } from "@/components/Intro";
import { Photos } from "@/components/Photos";
import { PostItemSmall } from "@/components/PostItemSmall";
import { SocialLinks } from "@/components/SocialLinks";
import { WorkItem } from "@/components/WorkItem";
import { getAllPosts } from "@/shared/api";
import Link from "next/link";

export default async function Home() {
  const posts = getAllPosts(0, 3);

  return (
    <>
      <Intro>
        <IntroTitle>Software developer, frontend ninja and gamer.</IntroTitle>
        <IntroText>
          I&apos;m Josep Viciana (aka emmgfx), a software developer based in
          Barcelona. I have collaborated on projects for both tiny and
          internationally renowned companies and organizations. I&apos;m the
          co-founder of Marmota and most important: I&apos;ve unlocked all the
          Sekiro achievements, twice.
        </IntroText>
        <IntroBottom>
          <SocialLinks />
        </IntroBottom>
      </Intro>
      <div className="h-14" />
      <Photos />
      <div className="h-24" />
      <div className="grid grid-cols-1 md:grid-cols-12 max-w-lg md:max-w-none gap-16 mx-auto">
        <div className="md:col-span-7">
          <ArticlesList
            className="space-y-16 mx-auto md:col-span-6"
            posts={posts}
            variant={PostItemSmall}
          />
        </div>
        <div className="md:col-span-5 space-y-8">
          <Card>
            <h2 className="text-sm font-semibold">Work</h2>
            <div className="h-4" />
            <ul className="space-y-6">
              <li>
                <WorkItem
                  company="3Data"
                  logo="/companies/pw.jpg"
                  responsabilities={[
                    {
                      responsability: "Tech lead",
                      startYear: 2021,
                      endYear: null,
                    },
                    {
                      responsability: "Senior developer",
                      startYear: 2009,
                      endYear: 2021,
                    },
                    {
                      responsability: "Junior developer",
                      startYear: 2007,
                      endYear: 2009,
                    },
                  ]}
                />
              </li>
              <li>
                <WorkItem
                  company="we are Marmota"
                  logo="/companies/marmota.png"
                  responsabilities={[
                    {
                      responsability: "Co-founder",
                      startYear: 2017,
                      endYear: null,
                    },
                  ]}
                />
              </li>
              <li>
                <WorkItem
                  company="Digital Parks"
                  logo="/companies/dp.jpg"
                  responsabilities={[
                    {
                      responsability: "Help desk",
                      startYear: 2007,
                      endYear: 2007,
                    },
                  ]}
                />
              </li>
            </ul>
            {/* <Link
              href="/about-me"
              className="block text-center p-4 -mx-4 -mb-4 mt-2 text-slate-400 text-xs rounded-sm hover:bg-slate-800 hover:text-slate-300 transition"
            >
              More about my work
            </Link> */}
          </Card>
          <Card>
            <h2 className="text-sm font-semibold">Contact</h2>
            <div className="h-4" />
            <p className="text-xs text-slate-400 leading-relaxed">
              If you want to contact with me, search for me by the nickname{" "}
              <span className="text-slate-200">emmgfx</span> in Gmail, Telegram,
              LinkedIn, GitHub, etc.
            </p>
            <Link
              href="/about-me"
              className="block text-center p-4 -mx-4 -mb-4 mt-2 text-slate-400 text-xs rounded-sm hover:bg-slate-800 hover:text-slate-300 transition"
            >
              More about me
            </Link>
          </Card>
        </div>
      </div>
    </>
  );
}
