"use client";

import { useId, useState } from "react";
import { FiClock, FiUser } from "react-icons/fi";
import type { TeamGroup } from "../data/governance";

type Props = {
  groups: TeamGroup[];
};

export default function TeamTabs({ groups }: Props) {
  const baseId = useId();
  const [active, setActive] = useState(0);

  if (!groups.length) return null;

  const current = groups[Math.min(active, groups.length - 1)];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Team departments"
        className="flex flex-wrap justify-center gap-2"
      >
        {groups.map((group, i) => {
          const isActive = i === active;
          return (
            <button
              key={group.id}
              id={`${baseId}-tab-${group.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`${baseId}-panel-${group.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => {
                if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
                e.preventDefault();
                const next =
                  e.key === "ArrowRight"
                    ? (i + 1) % groups.length
                    : (i - 1 + groups.length) % groups.length;
                setActive(next);
                document
                  .getElementById(`${baseId}-tab-${groups[next].id}`)
                  ?.focus();
              }}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? "bg-(--brand) text-white shadow-sm"
                  : "border border-(--border) bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {group.label}
            </button>
          );
        })}
      </div>

      <div
        id={`${baseId}-panel-${current.id}`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${current.id}`}
        tabIndex={0}
        className="mt-8"
      >
        <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-slate-600">
          {current.blurb}
        </p>

        {current.members.length ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {current.members.map((member) => (
              <div
                key={`${current.id}-${member.name}`}
                className="rounded-3xl border border-(--border) bg-white p-6 text-center shadow-[0_18px_70px_-65px_rgba(2,6,23,0.65)]"
              >
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-(--surface-2) text-(--brand) ring-1 ring-black/5">
                  <FiUser className="h-7 w-7" aria-hidden />
                </div>
                <h3 className="mt-4 text-base font-extrabold text-slate-950">
                  {member.name}
                </h3>
                {member.role ? (
                  <p className="mt-1 text-xs font-semibold text-(--brand)">
                    {member.role}
                  </p>
                ) : null}
                {member.qualification ? (
                  <p className="mt-3 text-sm font-semibold text-slate-700">
                    {member.qualification}
                  </p>
                ) : null}
                {member.institution ? (
                  <p className="mt-1 text-sm text-slate-500">
                    {member.institution}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-8 max-w-xl rounded-3xl border border-dashed border-(--border) bg-white p-8 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-(--surface-2) text-(--brand)">
              <FiClock className="h-5 w-5" aria-hidden />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Profiles for the {current.label} team are being updated and will
              be published here shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
