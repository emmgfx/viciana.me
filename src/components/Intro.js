export const Intro = ({ children }) => {
  return (
    <div className="max-w-3xl" style={{ textWrap: "balance" }}>
      {children}
    </div>
  );
};

export const IntroTitle = ({ children }) => {
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-semibold text-slate-100">
        {children}
      </h1>
      <div className="h-8" />
    </>
  );
};

export const IntroText = ({ children }) => {
  return (
    <>
      <p className="text-slate-400">{children}</p>
      <div className="h-8" />
    </>
  );
};

export const IntroBottom = ({ children }) => {
  return (
    <>
      {children}
      <div className="h-8" />
    </>
  );
};
