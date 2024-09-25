import { ArticlesList } from "@/components/ArticlesList";
import { Card } from "@/components/Card";
import { Intro } from "@/components/Intro";
import { Photos } from "@/components/Photos";
import { PostItemSmall } from "@/components/PostItemSmall";
import { SocialLinks } from "@/components/SocialLinks";
import { WorkItem } from "@/components/WorkItem";
import { getAllPosts } from "@/shared/api";

export default async function Home() {
  const posts = getAllPosts(0, 2);

  return (
    <>
      <Intro
        title="Software developer, frontend ninja and gamer."
        text="I'm Josep Viciana (aka emmgfx), a software developer based in
        Barcelona. I have collaborated on projects for both tiny and
        internationally renowned companies and organizations. I'm the
        co-founder of Marmota and most important: I've unlocked all the
        Sekiro achievements, twice."
      >
        <SocialLinks />
      </Intro>
      <div className="h-14" />
      <Photos />
      <div className="h-24" />
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-16 max-w-xl lg:max-w-none mx-auto">
        <div className="lg:col-span-6">
          <ArticlesList
            className="space-y-16 mx-auto lg:col-span-6"
            posts={posts}
            variant={PostItemSmall}
          />
        </div>
        <div className="lg:col-span-4 space-y-8">
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
          </Card>
          <Card>
            <h2 className="text-sm font-semibold">Contact</h2>
            <div className="h-4" />
            <p className="text-xs text-slate-400 leading-relaxed">
              If you want to contact with me, search for me by the nickname{" "}
              <span className="bg-slate-700 rounded py-1 px-1.5">emmgfx</span>{" "}
              in Gmail o Telegram.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}
