import { SocialLinks } from "@/components/SocialLinks";

export const Intro = ({ title, text, children }) => {
  return (
    <div className="max-w-3xl" style={{ textWrap: "balance" }}>
      <h1 className="text-4xl md:text-5xl font-semibold text-slate-100">
        {title}
      </h1>
      <div className="h-8" />
      <p className="text-slate-400">{text}</p>
      {children && (
        <>
          <div className="h-8" />
          {children}
        </>
      )}
    </div>
  );
};
