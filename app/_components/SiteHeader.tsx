"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { IconType } from "react-icons";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiTiktok, SiYoutube } from "react-icons/si";
import {
  FiAward,
  FiBookOpen,
  FiChevronDown,
  FiChevronRight,
  FiClock,
  FiGrid,
  FiLayers,
  FiLogIn,
  FiMapPin,
  FiMail,
  FiMenu,
  FiPhone,
  FiX,
} from "react-icons/fi";
import { allCourses } from "../data/coursedata";
import { allDiplomaCourses } from "../data/diplomacoursedata";

type NavLink = { label: string; href: string };
type NavItem = NavLink & { children?: NavLink[] };

const navItems: NavItem[] = [
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Who We Are", href: "/about" },
      { label: "Our Teachers", href: "/our-teachers" },
      {
        label: "Academic & Examination Board",
        href: "/about#academic-board",
      },
    ],
  },
  { label: "Student Affairs", href: "/student-affairs" },
  { label: "Courses", href: "/courses" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

function navPath(href: string) {
  return href.split("#")[0];
}

function isNavActive(href: string, pathname: string) {
  const path = navPath(href);
  return pathname === path || pathname.startsWith(`${path}/`);
}

function isNavItemActive(item: NavItem, pathname: string) {
  if (
    item.label === "Courses" &&
    (pathname.startsWith("/courses") || pathname.startsWith("/diploma-courses"))
  ) {
    return true;
  }
  if (isNavActive(item.href, pathname)) return true;
  return item.children?.some((child) => isNavActive(child.href, pathname));
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedMobileNav, setExpandedMobileNav] = useState<string | null>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setExpandedMobileNav(null);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, closeMenu]);

  const topBarLeft = useMemo(
    () => [
      { icon: FiPhone, label: "Call: +65 8221 6423", href: "tel:+6582216423" },
      {
        icon: FiMapPin,
        label: "7500A Beach Rd, #01-308 THE PLAZA, Singapore 199591",
      },
      {
        icon: FiMail,
        label: "info@lumaxacademy.com.sg",
        href: "mailto:info@lumaxacademy.com.sg",
      },
    ],
    []
  );

  const socials = useMemo(
    () => [
      { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61589531251092", icon: FaFacebookF },
      { label: "Instagram", href: "https://www.instagram.com/lumax.academy/", icon: FaInstagram },
      { label: "TikTok", href: "https://www.tiktok.com/@lumax.academy4", icon: SiTiktok },
      { label: "YouTube", href: "https://www.youtube.com/@LumaxAcademy", icon: SiYoutube },
    ],
    []
  );

  return (
    <header id="home" className="relative z-50">
      <div className="hidden lg:block border-b border-(--border) bg-(--surface-2)">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between gap-6 py-2 text-sm text-slate-600">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {topBarLeft.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <item.icon className="h-4 w-4 shrink-0 text-(--brand)" aria-hidden />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-medium text-slate-700 hover:text-(--brand)"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="font-medium text-slate-700">{item.label}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              {socials.map((s: { label: string; href: string; icon: IconType }) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-7 w-7 place-items-center rounded-full bg-white text-slate-700 shadow-sm ring-1 ring-black/5 hover:text-(--brand)"
                  aria-label={s.label}
                >
                  <s.icon className="h-3.5 w-3.5" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={[
          "sticky top-0 border-b border-(--border) bg-white/90 backdrop-blur supports-backdrop-filter:bg-white/70",
          scrolled ? "shadow-[0_12px_30px_-20px_rgba(2,6,23,0.35)]" : "",
        ].join(" ")}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-[78px] items-center justify-between gap-3 lg:h-[84px]">
            <Link href="/" className="flex min-w-0 items-center">
              <Image
                src="/lumax_logo.jpg"
                alt="Lumax Academy"
                width={190}
                height={64}
                priority
                className="h-12 w-auto rounded-md object-contain sm:h-15"
              />
            </Link>

            <nav className="hidden flex-1 justify-center lg:flex">
              <div className="flex items-center gap-1">
                {navItems.map((item) => {
                  const active = isNavItemActive(item, pathname);
                  const className = [
                    "rounded-xl px-3 py-2 text-sm font-semibold",
                    active
                      ? "bg-[#fff7e8] text-[#193764]"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900",
                  ].join(" ");

                  if (item.label === "Courses") {
                    return (
                      <div key={item.label} className="group relative">
                        <button
                          type="button"
                          className={[
                            className,
                            "inline-flex items-center gap-1",
                          ].join(" ")}
                          aria-haspopup="true"
                        >
                          {item.label}
                          <FiChevronDown
                            className="h-4 w-4 transition duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
                            aria-hidden
                          />
                        </button>

                        <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[min(920px,calc(100vw-2rem))] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                          <div className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_30px_90px_-35px_rgba(2,6,23,0.5)] ring-1 ring-black/5">
                            <div className="grid grid-cols-[0.85fr_1.35fr]">
                              <div className="relative overflow-hidden bg-linear-to-br from-[#102b50] via-[#193764] to-[#0c203b] p-6 text-white">
                                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-(--brand)/20 blur-3xl" />
                                <div
                                  className="absolute inset-0 opacity-[0.06]"
                                  style={{
                                    backgroundImage:
                                      "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                                    backgroundSize: "32px 32px",
                                  }}
                                />
                                <div className="relative">
                                  <div className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-(--brand)">
                                    <FiAward className="h-4 w-4" aria-hidden />
                                    Diploma Programmes
                                  </div>
                                  <p className="mt-3 text-xl font-extrabold leading-tight">
                                    Build deeper expertise for your next career
                                    move.
                                  </p>
                                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                                    Industry-relevant, part-time diplomas created
                                    for working learners and ambitious career
                                    switchers.
                                  </p>

                                  <div className="mt-5 grid gap-2.5">
                                    {allDiplomaCourses.map((course) => {
                                      const href = `/diploma-courses/${course.id}`;
                                      const courseActive = isNavActive(
                                        href,
                                        pathname,
                                      );
                                      return (
                                        <Link
                                          key={course.id}
                                          href={href}
                                          className={[
                                            "group/course rounded-2xl border p-3.5 transition",
                                            courseActive
                                              ? "border-(--brand)/60 bg-(--brand)/15"
                                              : "border-white/10 bg-white/7 hover:border-(--brand)/35 hover:bg-white/11",
                                          ].join(" ")}
                                        >
                                          <div className="flex items-start gap-3">
                                            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-(--brand) text-[#193764] shadow-lg shadow-[#faa426]/20">
                                              <FiLayers
                                                className="h-4 w-4"
                                                aria-hidden
                                              />
                                            </span>
                                            <div className="min-w-0">
                                              <div className="text-[13px] font-extrabold leading-snug text-white">
                                                {course.title}
                                              </div>
                                              <div className="mt-1.5 flex flex-wrap gap-2 text-[10px] font-bold text-white/50">
                                                <span>{course.duration}</span>
                                                <span aria-hidden>·</span>
                                                <span>{course.hours}</span>
                                                <span aria-hidden>·</span>
                                                <span>
                                                  {course.moduleCount} Modules
                                                </span>
                                              </div>
                                            </div>
                                            <FiChevronRight
                                              className="mt-1 h-4 w-4 shrink-0 text-(--brand) transition group-hover/course:translate-x-0.5"
                                              aria-hidden
                                            />
                                          </div>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>

                              <div className="p-6">
                                <div className="flex items-end justify-between gap-4 border-b border-slate-100 pb-4">
                                  <div>
                                    <div className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-(--brand)">
                                      <FiBookOpen
                                        className="h-4 w-4"
                                        aria-hidden
                                      />
                                      Certificate Courses
                                    </div>
                                    <p className="mt-1.5 text-xs text-slate-500">
                                      Practical skills for faster career growth
                                    </p>
                                  </div>
                                  <Link
                                    href="/courses"
                                    className="inline-flex shrink-0 items-center gap-1 text-xs font-extrabold text-[#193764] transition hover:text-(--brand)"
                                  >
                                    View all
                                    <FiChevronRight
                                      className="h-3.5 w-3.5"
                                      aria-hidden
                                    />
                                  </Link>
                                </div>

                                <div className="mt-4 grid grid-cols-2 gap-2">
                                  {allCourses.map((course) => {
                                    const href = `/courses/${course.id}`;
                                    const courseActive = isNavActive(
                                      href,
                                      pathname,
                                    );
                                    return (
                                      <Link
                                        key={course.id}
                                        href={href}
                                        className={[
                                          "group/course flex min-h-20 items-start gap-3 rounded-2xl border p-3 transition",
                                          courseActive
                                            ? "border-(--brand)/45 bg-[#fff7e8]"
                                            : "border-slate-100 bg-slate-50/70 hover:-translate-y-0.5 hover:border-(--brand)/30 hover:bg-[#fff7e8]",
                                        ].join(" ")}
                                      >
                                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-(--brand) shadow-sm ring-1 ring-black/5 transition group-hover/course:bg-(--brand) group-hover/course:text-white">
                                          <FiBookOpen
                                            className="h-4 w-4"
                                            aria-hidden
                                          />
                                        </span>
                                        <div className="min-w-0">
                                          <div className="line-clamp-2 text-[12px] font-extrabold leading-snug text-[#193764]">
                                            {course.title}
                                          </div>
                                          <div className="mt-1.5 flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                                            <FiClock
                                              className="h-3 w-3 text-(--brand)"
                                              aria-hidden
                                            />
                                            {course.hours}
                                            <span aria-hidden>·</span>
                                            {course.moduleCount} Modules
                                          </div>
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </div>

                                <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl bg-[#fff7e8] px-4 py-3 ring-1 ring-[#faa426]/15">
                                  <div className="flex items-center gap-3">
                                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-(--brand) text-white">
                                      <FiGrid
                                        className="h-4 w-4"
                                        aria-hidden
                                      />
                                    </span>
                                    <div>
                                      <div className="text-xs font-extrabold text-[#193764]">
                                        Not sure which course suits you?
                                      </div>
                                      <div className="text-[10px] text-slate-500">
                                        Our programme advisers can help.
                                      </div>
                                    </div>
                                  </div>
                                  <Link
                                    href="/contact"
                                    className="inline-flex shrink-0 items-center gap-1 rounded-xl bg-[#193764] px-3.5 py-2 text-[11px] font-extrabold text-white transition hover:brightness-110"
                                  >
                                    Get guidance
                                    <FiChevronRight
                                      className="h-3 w-3"
                                      aria-hidden
                                    />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  if (item.children?.length) {
                    return (
                      <div
                        key={item.label}
                        className="group relative"
                      >
                        <button
                          type="button"
                          className={[
                            className,
                            "inline-flex items-center gap-1",
                          ].join(" ")}
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {item.label}
                          <FiChevronDown
                            className="h-4 w-4 transition group-hover:rotate-180 group-focus-within:rotate-180"
                            aria-hidden
                          />
                        </button>
                        <div
                          className="pointer-events-none absolute left-0 top-full z-50 min-w-[240px] pt-2 opacity-0 translate-y-1 transition group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0"
                        >
                          <div className="rounded-2xl border border-(--border) bg-white p-2 shadow-[0_18px_50px_-24px_rgba(2,6,23,0.45)] ring-1 ring-black/5">
                            {item.children.map((child) => {
                              const childActive = isNavActive(
                                child.href,
                                pathname
                              );
                              return (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className={[
                                    "block rounded-xl px-3 py-2.5 text-sm font-semibold transition",
                                    childActive
                                      ? "bg-[#fff7e8] text-[#193764]"
                                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900",
                                  ].join(" ")}
                                >
                                  {child.label}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return item.href.startsWith("/") &&
                    !item.href.startsWith("/#") ? (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={className}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a key={item.label} href={item.href} className={className}>
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </nav>

            <div className="hidden shrink-0 items-center gap-2 lg:flex">
              <a
                href="https://onlineportal.lumaxacademy.com.sg/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-2xl bg-linear-to-r from-(--brand) to-[#ffd38a] px-4 text-sm font-extrabold text-[#193764] shadow-lg shadow-[#faa426]/30 ring-1 ring-[#faa426]/35 transition hover:-translate-y-0.5 hover:brightness-105"
              >
                <FiLogIn className="h-4 w-4" aria-hidden />
                Student Portal
              </a>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center rounded-2xl bg-(--brand-2) px-5 text-sm font-extrabold text-white shadow-lg shadow-[#193764]/20 transition hover:brightness-110"
              >
                Enquire Now
              </Link>
            </div>

            <div className="flex shrink-0 items-center gap-2 lg:hidden">
              <a
                href="tel:+6582216423"
                className="grid h-10 w-10 place-items-center rounded-2xl border border-(--border) bg-(--surface-2) text-(--brand-2) shadow-sm shadow-black/5"
                aria-label="Call Lumax Academy"
              >
                <FiPhone className="h-4.5 w-4.5" aria-hidden />
              </a>
              <button
                type="button"
                className="inline-flex h-11 items-center gap-2 rounded-2xl bg-(--brand-2) px-4 text-sm font-extrabold text-white shadow-lg shadow-[#193764]/20 active:scale-[0.98]"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
              >
                Menu
                <FiMenu className="h-5 w-5" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <div className="fixed inset-0 z-60 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-slate-950/55 backdrop-blur-sm"
            onClick={closeMenu}
            aria-label="Close menu overlay"
          />
          <div className="absolute right-0 top-0 flex h-full w-[min(340px,90vw)] flex-col overflow-hidden rounded-l-4xl bg-white shadow-2xl">
            <div className="relative overflow-hidden bg-linear-to-br from-[#193764] via-[#1f477c] to-[#10213d] px-4 pb-4 pt-3.5 text-white">
              <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-(--brand)/25 blur-3xl" />
              <div className="relative flex items-center justify-between gap-3">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="rounded-xl bg-white/95 px-2.5 py-1.5 shadow-sm"
                >
                  <Image
                    src="/lumax_logo.jpg"
                    alt="Lumax Academy"
                    width={130}
                    height={44}
                    className="h-9 w-auto object-contain"
                  />
                </Link>
                <button
                  type="button"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/10 text-white ring-1 ring-white/15"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <FiX className="h-4 w-4" aria-hidden />
                </button>
              </div>

              <div className="relative mt-3 flex items-center gap-2">
                <a
                  href="tel:+6582216423"
                  className="grid h-10 w-10 place-items-center rounded-xl bg-white/12 ring-1 ring-white/15 transition hover:bg-white/20"
                  aria-label="Call"
                >
                  <FiPhone className="h-4.5 w-4.5 text-(--brand)" aria-hidden />
                </a>
                <a
                  href="https://wa.me/6582216423"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-xl bg-white/12 ring-1 ring-white/15 transition hover:bg-white/20"
                  aria-label="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-(--brand)" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                </a>
                <a
                  href="mailto:info@lumaxacademy.com.sg"
                  className="grid h-10 w-10 place-items-center rounded-xl bg-white/12 ring-1 ring-white/15 transition hover:bg-white/20"
                  aria-label="Email"
                >
                  <FiMail className="h-4.5 w-4.5 text-(--brand)" aria-hidden />
                </a>
              </div>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-3">
              <div className="grid gap-1.5">
                {navItems.map((item) => {
                  const active = isNavItemActive(item, pathname);
                  const expanded = expandedMobileNav === item.label;
                  const cls = [
                    "group flex items-center justify-between rounded-xl border px-3.5 py-3 text-[13px] font-extrabold text-[#193764] shadow-sm shadow-black/4 transition active:scale-[0.98]",
                    active
                      ? "border-[#faa426]/40 bg-[#fff7e8]"
                      : "border-(--border) bg-white hover:border-[#faa426]/30 hover:bg-[#fff7e8]",
                  ].join(" ");
                  const arrow = (
                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-[#fff7e8] text-(--brand) transition group-hover:bg-(--brand) group-hover:text-white">
                      <FiChevronRight className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  );

                  if (item.label === "Courses") {
                    return (
                      <div key={item.label} className="grid gap-1.5">
                        <button
                          type="button"
                          className={cls}
                          aria-expanded={expanded}
                          onClick={() =>
                            setExpandedMobileNav(expanded ? null : item.label)
                          }
                        >
                          <span className="flex items-center gap-2.5">
                            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#fff7e8] text-(--brand)">
                              <FiGrid className="h-4 w-4" aria-hidden />
                            </span>
                            {item.label}
                          </span>
                          <span
                            className={[
                              "grid h-7 w-7 place-items-center rounded-lg bg-[#fff7e8] text-(--brand) transition",
                              expanded
                                ? "bg-(--brand) text-white"
                                : "group-hover:bg-(--brand) group-hover:text-white",
                            ].join(" ")}
                          >
                            <FiChevronDown
                              className={[
                                "h-3.5 w-3.5 transition",
                                expanded ? "rotate-180" : "",
                              ].join(" ")}
                              aria-hidden
                            />
                          </span>
                        </button>

                        {expanded ? (
                          <div className="overflow-hidden rounded-2xl border border-(--border) bg-slate-50 shadow-inner shadow-black/3">
                            <div className="bg-linear-to-br from-[#193764] to-[#10213d] p-3.5 text-white">
                              <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-(--brand)">
                                <FiAward className="h-3.5 w-3.5" aria-hidden />
                                Diploma Programmes
                              </div>
                              <div className="mt-2 grid gap-2">
                                {allDiplomaCourses.map((course) => {
                                  const href = `/diploma-courses/${course.id}`;
                                  return (
                                    <Link
                                      key={course.id}
                                      href={href}
                                      onClick={closeMenu}
                                      className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/8 p-3 transition active:scale-[0.99]"
                                    >
                                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-(--brand) text-[#193764]">
                                        <FiLayers
                                          className="h-3.5 w-3.5"
                                          aria-hidden
                                        />
                                      </span>
                                      <div className="min-w-0 flex-1">
                                        <div className="text-[11px] font-extrabold leading-snug">
                                          {course.title}
                                        </div>
                                        <div className="mt-1 text-[9px] font-bold text-white/50">
                                          {course.duration} · {course.hours} ·{" "}
                                          {course.moduleCount} Modules
                                        </div>
                                      </div>
                                      <FiChevronRight
                                        className="mt-1 h-3.5 w-3.5 shrink-0 text-(--brand)"
                                        aria-hidden
                                      />
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>

                            <div className="p-3.5">
                              <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-(--brand)">
                                  <FiBookOpen
                                    className="h-3.5 w-3.5"
                                    aria-hidden
                                  />
                                  Certificate Courses
                                </div>
                                <Link
                                  href="/courses"
                                  onClick={closeMenu}
                                  className="text-[10px] font-extrabold text-[#193764]"
                                >
                                  View all
                                </Link>
                              </div>
                              <div className="mt-2 grid gap-1.5">
                                {allCourses.map((course) => (
                                  <Link
                                    key={course.id}
                                    href={`/courses/${course.id}`}
                                    onClick={closeMenu}
                                    className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-white p-2.5 text-[#193764] shadow-sm shadow-black/3 transition active:scale-[0.99]"
                                  >
                                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[#fff7e8] text-(--brand)">
                                      <FiBookOpen
                                        className="h-3.5 w-3.5"
                                        aria-hidden
                                      />
                                    </span>
                                    <div className="min-w-0 flex-1">
                                      <div className="text-[10.5px] font-extrabold leading-snug">
                                        {course.title}
                                      </div>
                                      <div className="mt-0.5 text-[9px] font-bold text-slate-400">
                                        {course.hours} · {course.moduleCount}{" "}
                                        Modules
                                      </div>
                                    </div>
                                    <FiChevronRight
                                      className="h-3.5 w-3.5 shrink-0 text-(--brand)"
                                      aria-hidden
                                    />
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    );
                  }

                  if (item.children?.length) {
                    return (
                      <div key={item.label} className="grid gap-1.5">
                        <button
                          type="button"
                          className={cls}
                          aria-expanded={expanded}
                          onClick={() =>
                            setExpandedMobileNav(expanded ? null : item.label)
                          }
                        >
                          <span>{item.label}</span>
                          <span
                            className={[
                              "grid h-7 w-7 place-items-center rounded-lg bg-[#fff7e8] text-(--brand) transition",
                              expanded
                                ? "bg-(--brand) text-white"
                                : "group-hover:bg-(--brand) group-hover:text-white",
                            ].join(" ")}
                          >
                            <FiChevronDown
                              className={[
                                "h-3.5 w-3.5 transition",
                                expanded ? "rotate-180" : "",
                              ].join(" ")}
                              aria-hidden
                            />
                          </span>
                        </button>
                        {expanded ? (
                          <div className="grid gap-1 pl-2">
                            {item.children.map((child) => {
                              const childActive = isNavActive(
                                child.href,
                                pathname
                              );
                              return (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  onClick={() => {
                                    closeMenu();
                                  }}
                                  className={[
                                    "flex items-center justify-between rounded-xl border px-3.5 py-2.5 text-[12px] font-bold text-[#193764] shadow-sm shadow-black/4 transition active:scale-[0.98]",
                                    childActive
                                      ? "border-[#faa426]/40 bg-[#fff7e8]"
                                      : "border-(--border) bg-white hover:border-[#faa426]/30 hover:bg-[#fff7e8]",
                                  ].join(" ")}
                                >
                                  {child.label}
                                  <FiChevronRight
                                    className="h-3.5 w-3.5 text-(--brand)"
                                    aria-hidden
                                  />
                                </Link>
                              );
                            })}
                          </div>
                        ) : null}
                      </div>
                    );
                  }

                  return item.href.startsWith("/") &&
                    !item.href.startsWith("/#") ? (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeMenu}
                      className={cls}
                    >
                      {item.label}
                      {arrow}
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={closeMenu}
                      className={cls}
                    >
                      {item.label}
                      {arrow}
                    </a>
                  );
                })}
              </div>
            </nav>

            <div className="border-t border-(--border) bg-(--surface-2) px-3 py-3">
              <a
                href="https://onlineportal.lumaxacademy.com.sg/login"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-(--brand) to-[#ffd38a] px-5 py-2.5 text-sm font-extrabold text-[#193764] shadow-md shadow-[#faa426]/25 ring-1 ring-[#faa426]/35"
              >
                <FiLogIn className="h-4 w-4" aria-hidden />
                Student Portal
              </a>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-2 flex items-center justify-center rounded-xl bg-(--brand) px-5 py-2.5 text-sm font-extrabold text-[#193764] shadow-md shadow-[#faa426]/20"
              >
                Enquire Now
              </Link>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                {socials.map((s: { label: string; href: string; icon: IconType }) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-8 w-8 place-items-center rounded-full bg-white text-slate-600 ring-1 ring-black/5"
                    aria-label={s.label}
                  >
                    <s.icon className="h-3.5 w-3.5" aria-hidden />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
