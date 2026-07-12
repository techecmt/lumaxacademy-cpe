import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheck,
  FiClock,
  FiCoffee,
  FiMapPin,
} from "react-icons/fi";
import JsonLd from "../../_components/JsonLd";
import SiteFooter from "../../_components/SiteFooter";
import SiteHeader from "../../_components/SiteHeader";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  type BlogPost,
} from "../../data/seo";

const post: BlogPost = {
  slug: "how-to-become-a-barista-in-singapore",
  title: "How to Become a Barista in Singapore: Skills, Training & Careers",
  description:
    "A complete guide to becoming a barista in Singapore — what baristas do, the skills you need, how a barista course works, coffee training options, and career paths in Singapore's café and F&B scene.",
  image:
    "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1400&q=80",
  imageAlt:
    "Barista preparing espresso on a café coffee machine in Singapore",
  datePublished: "2026-07-12",
  dateModified: "2026-07-12",
  keywords: [
    "barista course Singapore",
    "barista training Singapore",
    "how to become a barista Singapore",
    "coffee making course Singapore",
    "barista classes Singapore",
    "coffee training course Singapore",
    "barista certificate Singapore",
    "barista academy Singapore",
  ],
};

const faqs = [
  {
    q: "Do I need experience to become a barista in Singapore?",
    a: "No. Most cafés and coffee chains hire beginners and train on the job, and a structured barista course is designed for people with no prior experience. What matters most is a willingness to learn, good hygiene habits, speed under pressure, and friendly customer service.",
  },
  {
    q: "How long is a barista course?",
    a: "It varies by provider. A focused barista course typically runs from a single day up to several weeks of part-time classes. Lumax Academy's Certificate in Barista Arts is a 36-hour part-time programme with weekend sessions, so you can train while working or studying.",
  },
  {
    q: "Is barista a good career in Singapore?",
    a: "Singapore's café, specialty coffee, and hospitality scene is large and growing, so trained baristas are in steady demand. Barista work also opens progression into senior barista, café supervisor, and coffee trainer roles, and the skills transfer across cafés, hotels, and coffee chains.",
  },
  {
    q: "What is the difference between a barista and a barrister?",
    a: "A barista makes and serves coffee; a barrister is a type of lawyer. The words sound similar and 'barrister course' is a very common typo for 'barista course'. If you want to learn to make coffee professionally, a barista course is what you are looking for.",
  },
  {
    q: "What will I learn in a coffee making course?",
    a: "A good barista course covers espresso extraction, milk steaming and texturing, latte art, coffee theory, café workflow and service, machine handling, and hygiene. Lumax Academy's programme combines classroom learning with hands-on practical training on real equipment.",
  },
  {
    q: "Where can I take a barista course in Singapore?",
    a: "Lumax Academy runs its Certificate in Barista Arts at our Beach Road campus (The Plaza, 7500A Beach Road), a short walk from Bugis and Nicoll Highway MRT. Classes are held on weekends and the campus is open Monday to Sunday, 9am to 6pm.",
  },
];

export const metadata: Metadata = {
  title: "How to Become a Barista in Singapore: Skills, Training & Careers",
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
  openGraph: {
    type: "article",
    url: `/blog/${post.slug}`,
    title: post.title,
    description: post.description,
    publishedTime: post.datePublished,
    modifiedTime: post.dateModified,
    images: [{ url: post.image, alt: post.imageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: post.title,
    description: post.description,
    images: [post.image],
  },
};

const skills = [
  {
    title: "Espresso extraction",
    desc: "Dialling in the grind, dose, and timing to pull a balanced shot — the foundation of every coffee.",
  },
  {
    title: "Milk steaming & texturing",
    desc: "Creating smooth, glossy microfoam for flat whites, cappuccinos, and lattes.",
  },
  {
    title: "Latte art",
    desc: "Pouring hearts, rosettas, and tulips that signal quality to customers.",
  },
  {
    title: "Café workflow & service",
    desc: "Working fast and clean during a rush while keeping every drink consistent.",
  },
  {
    title: "Customer service",
    desc: "Reading orders, handling queues, and creating the warm experience regulars return for.",
  },
  {
    title: "Hygiene & machine care",
    desc: "Cleaning, calibrating, and maintaining equipment to food-safety standards.",
  },
];

const chooseFactors = [
  "Hands-on practice on real espresso machines — not just theory or slides",
  "A syllabus that covers espresso, milk texturing, latte art, and café service",
  "Small class sizes so you get enough time on the machine",
  "A recognised certificate you can show employers",
  "A convenient location and schedule that fits around work",
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <JsonLd
        data={[
          articleJsonLd(post),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: `/blog/${post.slug}` },
            { name: "How to Become a Barista in Singapore", path: `/blog/${post.slug}` },
          ]),
          faqJsonLd(faqs),
        ]}
      />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-80 focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main" className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-linear-to-b from-[#fff7e8] via-white to-white">
          <div className="absolute inset-0">
            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-(--brand)/15 blur-3xl" />
            <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-(--brand-2)/15 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-3xl px-4 pb-10 pt-12 sm:pt-16">
            <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Link href="/" className="hover:text-slate-900">
                Home
              </Link>
              <span aria-hidden>/</span>
              <Link href="/courses/barista-arts" className="hover:text-slate-900">
                Barista Arts
              </Link>
              <span aria-hidden>/</span>
              <span className="text-(--brand)">Guide</span>
            </nav>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-(--border) bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700">
              <FiCoffee className="h-4 w-4 text-(--brand)" aria-hidden />
              Barista Career Guide · Singapore
            </div>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[44px] lg:leading-[1.1]">
              How to Become a Barista in Singapore
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Thinking about a career behind the coffee machine? This guide walks
              through what a barista does, the skills you need, how barista
              training and coffee making courses work, and the career paths open
              to you in Singapore&rsquo;s café and F&amp;B scene.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-3xl px-4 pb-16 sm:pb-20">
          <figure className="overflow-hidden rounded-3xl border border-(--border) shadow-[0_18px_70px_-60px_rgba(2,6,23,0.55)]">
            <div className="relative h-[260px] sm:h-[380px]">
              <Image
                alt={post.imageAlt}
                src={post.image}
                fill
                priority
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            </div>
          </figure>

          <div className="prose-lumax mt-10 space-y-10">
            {/* What a barista does */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                What does a barista actually do?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                A barista is a coffee professional who prepares and serves
                espresso-based drinks — flat whites, cappuccinos, lattes,
                piccolos, and more. But the job is more than pressing buttons.
                A good barista dials in the espresso, steams and textures milk,
                pours latte art, keeps the workflow fast and clean during a
                rush, and makes every customer feel looked after. In
                Singapore&rsquo;s competitive café scene, consistency and speed
                are what separate a trained barista from a beginner.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Baristas work across independent cafés, specialty coffee roasters,
                hotel lounges, and large coffee chains. Whether you want to join a
                neighbourhood café in Tiong Bahru or a busy chain in the CBD, the
                core skills are the same — and they can be learned.
              </p>
            </section>

            {/* Barista vs barrister */}
            <aside className="rounded-3xl border border-(--brand)/30 bg-(--surface-2) p-6">
              <h2 className="text-lg font-extrabold text-slate-900">
                Barista or &ldquo;barrister&rdquo;? Clearing up the confusion
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                A quick note, because it trips a lot of people up: a{" "}
                <strong className="font-semibold text-slate-900">barista</strong>{" "}
                makes coffee, while a{" "}
                <strong className="font-semibold text-slate-900">barrister</strong>{" "}
                is a type of lawyer. &ldquo;Barrister course&rdquo; and
                &ldquo;barrister training&rdquo; are extremely common typos for
                &ldquo;barista course&rdquo; and &ldquo;barista training&rdquo;. If
                you searched for a barrister course but you actually want to learn
                how to make coffee, you&rsquo;re in the right place — read on.
              </p>
            </aside>

            {/* Career outlook */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Is being a barista a good career in Singapore?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Singapore has one of Asia&rsquo;s most vibrant coffee cultures,
                from third-wave specialty cafés to established coffee chains and
                hotel F&amp;B outlets. That breadth means steady demand for
                skilled baristas, and it makes barista work an accessible entry
                point into the wider hospitality and food-and-beverage industry.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Pay depends on the employer, your experience, and the hours you
                work, and many roles include tips or service incentives on top of
                a base wage. More importantly, barista skills open a clear
                progression path: from junior barista to senior barista, then café
                supervisor or store manager, and eventually roles like coffee
                trainer or café owner. The skills you build are portable across
                every café and coffee brand in the country.
              </p>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                The skills every barista needs
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Becoming a barista is about building a handful of practical,
                repeatable skills until they become second nature. These are the
                core competencies employers look for — and exactly what quality
                barista training focuses on:
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {skills.map((skill) => (
                  <div
                    key={skill.title}
                    className="rounded-2xl border border-(--border) bg-white p-5 shadow-[0_18px_60px_-58px_rgba(2,6,23,0.5)]"
                  >
                    <div className="flex items-center gap-2">
                      <FiCheck className="h-4 w-4 text-(--brand)" aria-hidden />
                      <h3 className="text-base font-bold text-slate-900">
                        {skill.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <figure className="overflow-hidden rounded-3xl border border-(--border)">
              <div className="relative h-[240px] sm:h-[340px]">
                <Image
                  alt="Barista pouring latte art into a coffee cup during training"
                  src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1400&q=80"
                  fill
                  sizes="(min-width: 768px) 768px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="bg-(--surface-2) px-5 py-3 text-xs font-medium text-slate-500">
                Latte art is a signal of quality — and one of the most satisfying
                barista skills to master.
              </figcaption>
            </figure>

            {/* Do you need a course */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Do you need a barista course to get started?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                You can technically learn some basics on the job, but a structured
                barista course gets you there faster and with far more confidence.
                Instead of picking up scattered habits during a busy shift, a
                course gives you guided, hands-on practice on real espresso
                machines, feedback from an experienced trainer, and a clear
                progression from coffee theory to latte art.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                A recognised certificate also strengthens your job application. It
                shows employers you understand espresso extraction, milk
                texturing, hygiene, and café service before your first shift —
                which is exactly what a hiring café manager wants to see.
              </p>
            </section>

            {/* What a course covers */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                What a barista course covers
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                A well-designed coffee making course blends classroom learning
                with plenty of time on the machine. At Lumax Academy, our
                Certificate in Barista Arts is a 36-hour, part-time programme that
                takes you from coffee fundamentals through to café-ready service,
                including espresso extraction, milk steaming and texturing, latte
                art, and workflow under pressure.
              </p>
              <div className="mt-6 rounded-3xl border border-(--border) bg-(--surface-2) p-6">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-slate-700">
                  <span className="inline-flex items-center gap-2">
                    <FiClock className="h-4 w-4 text-(--brand)" aria-hidden />
                    36 hours · part-time · weekends
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <FiMapPin className="h-4 w-4 text-(--brand)" aria-hidden />
                    Beach Road campus, Singapore
                  </span>
                </div>
                <Link
                  href="/courses/barista-arts"
                  className="mt-5 inline-flex items-center justify-center rounded-xl bg-(--brand) px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#faa426]/25 hover:brightness-110"
                >
                  See the full Barista Arts course
                  <FiArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </div>
            </section>

            {/* How to choose */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                How to choose a barista course in Singapore
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Not every barista class is equal. When you compare coffee training
                courses in Singapore, look for these things:
              </p>
              <ul className="mt-5 space-y-3">
                {chooseFactors.map((factor) => (
                  <li
                    key={factor}
                    className="flex items-start gap-3 text-base leading-relaxed text-slate-600"
                  >
                    <FiCheck className="mt-1 h-4 w-4 shrink-0 text-(--brand)" aria-hidden />
                    {factor}
                  </li>
                ))}
              </ul>
            </section>

            {/* Local path */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Train as a barista at Lumax Academy, Beach Road
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Lumax Academy runs the Certificate in Barista Arts at our campus in
                The Plaza, 7500A Beach Road — a short walk from Bugis and Nicoll
                Highway MRT, in the heart of Singapore&rsquo;s Bugis–Kallang
                corridor. Weekend classes are built for working adults and career
                switchers, and our campus is open seven days a week.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                If you&rsquo;re ready to turn a love of coffee into a real skill —
                and a career in Singapore&rsquo;s café scene — a hands-on barista
                course is the fastest way in.
              </p>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Frequently asked questions
              </h2>
              <div className="mt-6 space-y-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="rounded-2xl border border-(--border) bg-white p-5 shadow-[0_18px_60px_-58px_rgba(2,6,23,0.5)]"
                  >
                    <h3 className="text-base font-bold text-slate-900">
                      {faq.q}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Closing CTA */}
          <div className="mt-12 rounded-3xl bg-[#193764] p-6 text-white sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight">
              Start your barista journey
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
              Learn espresso, milk texturing, latte art, and café service with
              hands-on training at our Beach Road campus. Enquire about the next
              intake for the Certificate in Barista Arts.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/courses/barista-arts"
                className="inline-flex items-center justify-center rounded-xl bg-(--brand) px-6 py-3 text-sm font-semibold text-white hover:brightness-110"
              >
                View the Barista Arts course
                <FiArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15"
              >
                Talk to our team
              </Link>
            </div>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
