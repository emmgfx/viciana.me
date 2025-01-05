import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;

  const title = searchParams.get("title");
  const tags = searchParams.get("tags").split(",");

  const width = searchParams.get("width") || 1200;
  const height = searchParams.get("height") || 630;

  const interSemiBold = fetch(
    new URL("./Inter-SemiBold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        tw="bg-slate-600"
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div tw="absolute inset-0 p-12 flex flex-col bg-slate-900 text-slate-100">
          <div tw="flex">
            <div tw="text-[64px] font-semibold grow">{title}</div>
            <div tw="flex"></div>
          </div>
          <div tw="grow" />
          <div tw="text-[32px] flex">
            {tags.map((tag) => (
              <div tw="mr-8" key={tag}>
                {tag}
              </div>
            ))}
          </div>
          <div tw="h-0.5 my-8 bg-slate-100" />
          <div tw="text-[36px] items-center self-end flex">
            <div>Josep Viciana</div>
            {/* <div tw="w-8"></div>
            <img
              src="https://www.viciana.me/avatar.jpeg"
              tw="w-[64px] rounded-full"
            /> */}
          </div>
        </div>
      </div>
    ),
    {
      width: width,
      height: height,
      fonts: [
        {
          name: "Inter",
          data: await interSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
