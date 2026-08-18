import { openingHours } from "../data/seo";

export default function CampusHours({
  className,
}: {
  className?: string;
}) {
  return (
    <dl className={["mt-2 grid gap-1.5 text-sm", className].filter(Boolean).join(" ")}>
      {openingHours.map((row) => (
        <div key={row.day} className="flex items-baseline justify-between gap-4">
          <dt className="font-semibold text-slate-800">{row.day}</dt>
          <dd
            className={
              row.opens
                ? "font-medium text-slate-700"
                : "font-semibold text-slate-400"
            }
          >
            {row.label}
          </dd>
        </div>
      ))}
    </dl>
  );
}
