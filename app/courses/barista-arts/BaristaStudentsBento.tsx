"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

const viewport = { once: true, margin: "-80px" } as const;

type BentoItem = {
  src: string;
  type: "image" | "video";
  alt: string;
  layout: string;
  objectPosition?: string;
};

const items: BentoItem[] = [
  {
    src: "/barista_images/barista-students/barista-video.mp4",
    type: "video",
    alt: "Barista students practising espresso and café skills in class",
    layout:
      "col-span-2 aspect-video md:col-span-2 md:row-span-2 md:aspect-auto md:min-h-0",
  },
  {
    src: "/barista_images/barista-students/barista-2.mp4",
    type: "video",
    alt: "Students practising barista techniques at the espresso bar",
    layout:
      "aspect-[3/4] md:col-span-1 md:row-span-2 md:aspect-auto md:min-h-0",
    objectPosition: "center top",
  },
  {
    src: "/barista_images/barista-students/barista-1.jpeg",
    type: "image",
    alt: "Barista students in a Lumax Academy classroom during a training session",
    layout:
      "aspect-[3/4] md:col-span-1 md:row-span-2 md:aspect-auto md:min-h-0",
  },
  {
    src: "/barista_images/barista-students/barista-video-1.mp4",
    type: "video",
    alt: "Hands-on barista training at Lumax Academy",
    layout: "aspect-video md:col-span-1 md:row-span-1 md:aspect-auto md:min-h-0",
  },
  {
    src: "/barista_images/barista-students/barista-6.mp4",
    type: "video",
    alt: "Students preparing specialty coffee during a practical session",
    layout: "aspect-video md:col-span-1 md:row-span-1 md:aspect-auto md:min-h-0",
  },
  {
    src: "/barista_images/barista-students/barista-5.mp4",
    type: "video",
    alt: "Classroom demonstration of barista arts and café workflow",
    layout:
      "col-span-2 aspect-video md:col-span-2 md:row-span-1 md:aspect-auto md:min-h-0",
  },
];

function BentoVideo({
  src,
  alt,
  objectPosition = "center",
}: {
  src: string;
  alt: string;
  objectPosition?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video || !wrap) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25, rootMargin: "80px" }
    );

    observer.observe(wrap);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="absolute inset-0">
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
        className="h-full w-full object-cover"
        style={{ objectPosition }}
      />
    </div>
  );
}

export default function BaristaStudentsBento() {
  return (
    <section
      aria-labelledby="barista-students-heading"
      className="relative overflow-hidden bg-linear-to-b from-white via-(--surface-2)/40 to-white py-14 sm:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-(--brand)/8 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-(--brand-2)/8 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
            INSIDE THE CLASSROOM
          </div>
          <h2
            id="barista-students-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl"
          >
            Students in action
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Real training sessions — espresso, milk texturing, latte art, and
            café service — captured from our Certificate in Barista Arts
            classroom.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-3 md:h-[min(760px,72vw)] md:grid-cols-4 md:grid-rows-3 md:gap-4 lg:h-[min(820px,68vw)]">
          {items.map((item, i) => (
            <motion.figure
              key={item.src}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
              className={`group relative isolate min-h-0 overflow-hidden rounded-2xl bg-slate-900 shadow-[0_16px_50px_-40px_rgba(2,6,23,0.55)] ring-1 ring-black/5 transition duration-500 hover:-translate-y-0.5 hover:shadow-[0_28px_70px_-45px_rgba(2,6,23,0.65)] hover:ring-(--brand)/25 sm:rounded-3xl ${item.layout}`}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.05]"
                />
              ) : (
                <BentoVideo
                  src={item.src}
                  alt={item.alt}
                  objectPosition={item.objectPosition}
                />
              )}

              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
