import Image from "next/image";

export const WorkItem = ({
  company = "Company name",
  responsabilities = [],
  logo = null,
}) => {
  return (
    <div className="flex gap-4">
      {logo ? (
        <Image
          src={logo}
          width={32}
          height={32}
          alt={company}
          className="h-8 w-8 rounded-sm mt-0.5 overflow-hidden"
          quality={100}
        />
      ) : (
        <div className="h-8 w-8 bg-slate-500 rounded-sm mt-0.5" />
      )}
      <div className="grow">
        <p className="text-xs font-semibold">{company}</p>
        <div className="h-1" />
        <ul className="space-y-1">
          {responsabilities.map(
            ({ responsability, startYear, endYear }, index) => {
              return (
                <li key={index} className="text-xs text-slate-400 flex">
                  <div className="grow">{responsability}</div>
                  <div>
                    {startYear} — {endYear || "Present"}
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};
