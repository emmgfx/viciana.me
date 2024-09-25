export default function NotFound() {
  return (
    <div className="text-center flex flex-col items-center space-y-6">
      <h2 className="text-5xl font-semibold">Not Found</h2>
      <p>Could not find requested resource</p>

      <div className="">
        <div className="w-full max-w-md aspect-[4/3] rounded-lg overflow-hidden">
          <iframe
            src="https://giphy.com/embed/q8C0Ljmy4F6Ss"
            width="100%"
            height="100%"
            // class="absolute"
            allowFullScreen
          ></iframe>
        </div>
        <div className="h-2" />
        <p className="text-xs text-slate-500">
          <a href="https://giphy.com/gifs/the-simpsons-homer-simpson-disappear-q8C0Ljmy4F6Ss">
            via GIPHY
          </a>
        </p>
      </div>
    </div>
  );
}
