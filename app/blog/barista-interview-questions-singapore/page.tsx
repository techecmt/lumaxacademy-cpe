import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheck, FiCoffee } from "react-icons/fi";
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
  slug: "barista-interview-questions-singapore",
  title: "50 Barista Interview Questions and Answers (Singapore Guide)",
  description:
    "50 common barista interview questions and answers for jobs in Singapore — with why each is asked, a sample answer, and a tip. Covers coffee knowledge, customer service, situational, and Singapore café-specific questions to help you prepare.",
  image:
    "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?auto=format&fit=crop&w=1400&q=80",
  imageAlt:
    "Barista at an espresso machine in a Singapore café during a job trial",
  datePublished: "2026-07-13",
  dateModified: "2026-07-13",
  keywords: [
    "barista interview questions Singapore",
    "barista job interview questions and answers",
    "barista interview questions and answers",
    "barista interview tips",
    "how to prepare for a barista interview",
    "coffee job interview Singapore",
    "cafe interview questions Singapore",
  ],
};

type QA = { q: string; why: string; answer: string; tip: string };
type Category = { id: string; title: string; questions: QA[] };

const categories: Category[] = [
  {
    id: "about-you",
    title: "About you & motivation",
    questions: [
      {
        q: "Tell me about yourself.",
        why: "It opens the interview and shows how you present yourself and stay relevant.",
        answer:
          "Keep it to a 30–60 second pitch focused on work, not personal life: “I'm a friendly, fast learner who enjoys hands-on work and talking to people. I've been building my coffee skills through practice and training, and I love the energy of a busy café — that's why a barista role really appeals to me.”",
        tip: "Tailor your last line to the job you're applying for. Avoid rambling about hobbies.",
      },
      {
        q: "Why do you want to work as a barista?",
        why: "They want genuine interest, not just any job to pay the bills.",
        answer:
          "“I enjoy the craft of making coffee well and the buzz of serving customers face to face. I like that no two shifts are the same, and I want to keep improving my espresso and latte-art skills in a real café.”",
        tip: "Show passion for coffee and people — both matter behind the bar.",
      },
      {
        q: "Why do you want to work at our café?",
        why: "It tests whether you've researched them or are mass-applying.",
        answer:
          "Mention something specific: their coffee style, atmosphere, location, or reputation. “I've had your flat white and loved the consistency, and your café has a warm, community feel that I'd enjoy being part of.”",
        tip: "Visit or check their menu and socials before the interview so this answer is concrete.",
      },
      {
        q: "What do you know about our café?",
        why: "It rewards candidates who did their homework.",
        answer:
          "Reference their concept, signature drinks, roaster or bean source, number of outlets, or the neighbourhood they serve. Even two or three accurate details show real effort.",
        tip: "If you truly don't know much, be honest but show curiosity — then ask a smart question about them.",
      },
      {
        q: "What does good coffee mean to you?",
        why: "It reveals your standards and whether you care about quality.",
        answer:
          "“Good coffee is consistent and well-balanced — a properly extracted shot, smooth textured milk, and a drink that tastes the same every time. It's also served with a smile, because experience is part of the cup.”",
        tip: "Balance craft (taste) with service (experience) — cafés want both.",
      },
      {
        q: "Where do you see yourself in a few years?",
        why: "They're checking commitment and whether you'll grow with them.",
        answer:
          "“I'd like to become a confident senior barista, and eventually take on shift-lead or training responsibilities. I want to keep deepening my coffee knowledge along the way.”",
        tip: "Show ambition that keeps you in hospitality — not a plan to leave in three months.",
      },
      {
        q: "What are your strengths as a barista?",
        why: "It lets you sell your most relevant qualities.",
        answer:
          "Pick two or three that fit the bar: “I stay calm and fast under pressure, I'm consistent with recipes, and I'm genuinely warm with customers.”",
        tip: "Back each strength with a one-line example if you can.",
      },
      {
        q: "What is your biggest weakness?",
        why: "They want self-awareness and how you improve, not a fake 'I work too hard'.",
        answer:
          "Choose a real but non-fatal weakness with a fix: “I used to be slow at latte art, so I've been practising deliberately and it's improved a lot. I keep working on it.”",
        tip: "Never name a weakness that's core to the job, like 'I'm not a people person'.",
      },
    ],
  },
  {
    id: "coffee-knowledge",
    title: "Coffee knowledge & technical skills",
    questions: [
      {
        q: "What is espresso?",
        why: "It's the foundation of the job — they're checking you know the basics.",
        answer:
          "“Espresso is a concentrated coffee made by forcing hot water at high pressure through finely ground, tamped coffee. It's the base for most café drinks like lattes, cappuccinos, and flat whites.”",
        tip: "Mention pressure and fine grind — those show real understanding.",
      },
      {
        q: "What's the difference between a latte, cappuccino, and flat white?",
        why: "A very common technical question that trips up beginners.",
        answer:
          "“All three are espresso with steamed milk. A cappuccino has more foam and is lighter; a latte has more milk and a thin layer of foam; a flat white is smaller with a higher coffee-to-milk ratio and silky microfoam.”",
        tip: "Ratios and foam levels are the key differences — get those right.",
      },
      {
        q: "What is the ideal espresso extraction time?",
        why: "It shows whether you understand dialling in a shot.",
        answer:
          "“A typical double shot extracts in around 25–30 seconds. If it runs too fast it tastes sour and weak; too slow and it turns bitter. I'd taste and adjust the grind to fix it.”",
        tip: "Give a range and explain what fast vs slow means for taste.",
      },
      {
        q: "What does it mean to 'dial in' a grinder?",
        why: "It tests hands-on knowledge beyond just pressing buttons.",
        answer:
          "“Dialling in means adjusting the grind size so the shot extracts in the right time with the right taste. Finer grind slows it down, coarser speeds it up. I'd tweak, pull, and taste until it's balanced.”",
        tip: "Link grind size to extraction time and flavour to sound experienced.",
      },
      {
        q: "How do you steam and texture milk properly?",
        why: "Milk technique separates a trained barista from a beginner.",
        answer:
          "“I purge the steam wand, keep the tip just under the surface to introduce air, then submerge it to create a smooth whirlpool. The goal is glossy microfoam with no big bubbles, heated to around 60–65°C.”",
        tip: "Mention not overheating the milk and wiping/purging the wand for hygiene.",
      },
      {
        q: "What is latte art and can you do it?",
        why: "It signals skill and attention to presentation.",
        answer:
          "Be honest about your level: “Yes, I can pour hearts and rosettas, and I'm improving tulips. Good latte art also tells me the milk was textured correctly.”",
        tip: "If you're still learning, say so and show eagerness to practise — many cafés will train you.",
      },
      {
        q: "What causes a bitter or sour espresso shot?",
        why: "Troubleshooting knowledge is valued behind the bar.",
        answer:
          "“Sour usually means under-extraction — grind too coarse or shot too fast. Bitter usually means over-extraction — grind too fine or shot too slow. I'd adjust the grind and dose to fix the balance.”",
        tip: "Sour = under, bitter = over. Remember that simple pairing.",
      },
      {
        q: "How do you keep an espresso machine clean and maintained?",
        why: "Hygiene and equipment care protect drink quality and food safety.",
        answer:
          "“I purge and wipe the steam wand after every drink, backflush the group heads, empty and rinse the drip tray and knock box, and do a deeper clean at close. Clean equipment means better-tasting coffee.”",
        tip: "Emphasise routine cleaning during service, not just at closing.",
      },
      {
        q: "What's the difference between arabica and robusta beans?",
        why: "It shows broader coffee knowledge.",
        answer:
          "“Arabica is smoother, more aromatic, and higher quality, used in most specialty coffee. Robusta is stronger, more bitter, higher in caffeine, and often used in blends for crema and body.”",
        tip: "Knowing this helps you talk to customers about the café's beans.",
      },
      {
        q: "How do you keep coffee consistent across a busy shift?",
        why: "Consistency is what keeps customers coming back.",
        answer:
          "“I stick to the recipe — same dose, grind, and timing — taste-check periodically, and re-dial the grinder if the weather or beans change. I don't rush the fundamentals even when it's busy.”",
        tip: "Consistency + speed together is the trained-barista answer.",
      },
    ],
  },
  {
    id: "customer-service",
    title: "Customer service & communication",
    questions: [
      {
        q: "How would you handle a customer who says their drink is wrong?",
        why: "It tests composure and service recovery.",
        answer:
          "“I'd apologise sincerely, thank them for telling me, and remake it right away without arguing. A quick, gracious fix usually turns a complaint into a loyal customer.”",
        tip: "Never be defensive — own it and fix it fast.",
      },
      {
        q: "How do you deliver good customer service during a rush?",
        why: "Peak-hour service is the reality of café work in Singapore.",
        answer:
          "“I stay friendly but efficient — a warm greeting, quick eye contact, accurate orders, and clear communication about wait times. Speed matters, but people still want to feel seen.”",
        tip: "Show you can be fast and pleasant at the same time.",
      },
      {
        q: "How do you handle a rude or angry customer?",
        why: "They want to know you stay calm and professional.",
        answer:
          "“I stay calm, listen without interrupting, and focus on solving the problem rather than reacting. If it escalates beyond what I can handle, I involve a supervisor.”",
        tip: "Stay calm, don't take it personally, and know when to escalate.",
      },
      {
        q: "A customer asks for a recommendation — what do you do?",
        why: "It shows product knowledge and a consultative style.",
        answer:
          "“I'd ask what they usually enjoy — strong or milky, sweet or not — then suggest something that fits, like a flat white for someone who likes a stronger milk coffee. Personalised suggestions build trust.”",
        tip: "Ask a question first, then recommend — don't just push the priciest item.",
      },
      {
        q: "How do you handle a long queue with limited staff?",
        why: "It reveals prioritisation and calm under pressure.",
        answer:
          "“I acknowledge the queue with a quick greeting, batch similar drinks, keep the workflow tight, and communicate wait times honestly. Keeping customers informed reduces frustration.”",
        tip: "Communication during the wait is as important as speed.",
      },
      {
        q: "How do you remember regulars and their orders?",
        why: "Building rapport drives repeat business.",
        answer:
          "“I make an effort to greet regulars, remember their usual order, and use small talk to connect. Regulars are the backbone of a café, so those relationships matter.”",
        tip: "Emphasise genuine warmth, not scripted friendliness.",
      },
      {
        q: "How do you upsell without being pushy?",
        why: "Cafés want higher tickets but not pressured customers.",
        answer:
          "“I suggest naturally — like offering a pastry that pairs with their coffee, or an extra shot if they want it stronger. If they say no, I leave it and keep the experience relaxed.”",
        tip: "Frame upselling as helpful suggestions, not a sales pitch.",
      },
      {
        q: "How would you handle a complaint about waiting time?",
        why: "It's a frequent real-world scenario.",
        answer:
          "“I'd apologise for the wait, give an honest updated time, and if appropriate offer a small gesture. Then I focus on getting their order out quickly and correctly.”",
        tip: "Honesty about timing beats false promises.",
      },
    ],
  },
  {
    id: "situational",
    title: "Situational & problem-solving",
    questions: [
      {
        q: "The espresso machine breaks down mid-service — what do you do?",
        why: "It tests how you react when things go wrong under pressure.",
        answer:
          "“I'd stay calm, inform waiting customers honestly, offer alternatives like batch brew or other drinks if available, and alert my supervisor or maintenance. I'd keep service moving where I can.”",
        tip: "Show you keep the customer informed and don't freeze.",
      },
      {
        q: "You make a mistake on an order the customer already took away — what now?",
        why: "It reveals honesty and initiative.",
        answer:
          "“If they're still nearby I'd call them back and fix it. If not, I'd note it, apologise if they return, and make it right. I'd also flag it so we avoid repeating the mistake.”",
        tip: "Owning mistakes quickly builds trust with both customers and managers.",
      },
      {
        q: "Two customers order at once and both are in a hurry — how do you prioritise?",
        why: "It checks fairness and efficiency.",
        answer:
          "“I serve in order of arrival, acknowledge both, and batch steps where I can — like steaming milk for both drinks together. I keep them updated so neither feels ignored.”",
        tip: "Fair order plus smart batching is the ideal answer.",
      },
      {
        q: "You notice a colleague not following hygiene rules — what do you do?",
        why: "Food safety is non-negotiable in Singapore's F&B industry.",
        answer:
          "“I'd remind them politely and privately first. If it continued or was serious, I'd raise it with a supervisor, because hygiene protects customers and the business.”",
        tip: "Show you take hygiene seriously without being confrontational.",
      },
      {
        q: "It's suddenly very busy and you're alone at the bar — how do you cope?",
        why: "Solo peak-hour service happens often in small cafés.",
        answer:
          "“I prioritise, greet everyone so they know I've seen them, work through orders methodically, and keep my station organised so I don't lose time. I'd call for backup if it's available.”",
        tip: "Calm organisation beats panicked rushing.",
      },
      {
        q: "A customer has a severe allergy — how do you handle their order?",
        why: "It tests care, honesty, and food-safety awareness.",
        answer:
          "“I take it seriously, check the ingredients honestly, use clean equipment to avoid cross-contamination, and if I'm unsure I check rather than guess. I'd never risk their safety to make a sale.”",
        tip: "Say clearly that you'd verify rather than assume — safety first.",
      },
      {
        q: "You run out of a key ingredient during peak hour — what do you do?",
        why: "It checks resourcefulness and communication.",
        answer:
          "“I'd inform affected customers early and offer alternatives, quickly check the back for stock, and let my team or manager know to restock. I keep service transparent.”",
        tip: "Proactive communication prevents disappointed customers.",
      },
      {
        q: "You disagree with how a manager wants a drink made — what do you do?",
        why: "It reveals professionalism and respect for standards.",
        answer:
          "“I'd follow the café's standard because consistency matters, then raise my suggestion privately at a better time. The house recipe comes first in front of customers.”",
        tip: "Show respect for standards while still being thoughtful.",
      },
      {
        q: "A customer wants to pay but the POS system is down — what do you do?",
        why: "It tests calm problem-solving with money involved.",
        answer:
          "“I'd apologise, follow the café's backup process — cash, a manual record, or an alternative payment method — and keep the customer informed. I'd flag the issue to a supervisor immediately.”",
        tip: "Never improvise with money — follow the store's backup procedure.",
      },
    ],
  },
  {
    id: "teamwork",
    title: "Teamwork, reliability & availability",
    questions: [
      {
        q: "How do you work as part of a team behind the bar?",
        why: "Café work is fast and highly collaborative.",
        answer:
          "“I communicate clearly, call out orders, help wherever there's a bottleneck, and keep shared stations tidy. A smooth bar depends on everyone covering each other.”",
        tip: "Give a concrete example of supporting a teammate during a rush.",
      },
      {
        q: "Are you comfortable working weekends and public holidays?",
        why: "Cafés are busiest exactly when others are off.",
        answer:
          "Be honest but flexible: “Yes, I understand weekends and holidays are peak times for cafés and I'm happy to work them.”",
        tip: "If you have genuine constraints, state them clearly rather than over-promising.",
      },
      {
        q: "Can you work split shifts or early mornings?",
        why: "Many Singapore cafés open early and run split shifts.",
        answer:
          "“Yes, I'm an early riser and I'm fine with opening shifts and splits. I know morning service is a café's most important period.”",
        tip: "Availability is often the deciding factor — be as flexible as you truthfully can.",
      },
      {
        q: "How do you handle stress and pressure?",
        why: "Peak hours behind the bar are genuinely intense.",
        answer:
          "“I focus on one drink at a time, keep my station organised, and breathe through the rush. Staying calm keeps my quality and speed up rather than making mistakes.”",
        tip: "Describe a practical coping method, not just 'I handle it well'.",
      },
      {
        q: "Tell me about a time you resolved a conflict with a coworker.",
        why: "It tests maturity and communication.",
        answer:
          "Use a short STAR example: the situation, what you did (talked it out calmly and found a compromise), and the positive result.",
        tip: "Keep it professional and end on how the working relationship improved.",
      },
      {
        q: "How do you take feedback from a supervisor?",
        why: "Coachability matters, especially for beginners.",
        answer:
          "“I welcome feedback because it helps me improve. When my trainer corrected my milk technique, I practised it and got much better. I'd rather learn than repeat a mistake.”",
        tip: "Show you see feedback as growth, not criticism.",
      },
      {
        q: "How reliable are you with attendance and punctuality?",
        why: "Understaffed shifts hurt the whole team.",
        answer:
          "“Very reliable — I arrive early to set up, and I understand that a café can't open properly if someone is late. Punctuality is basic respect for the team.”",
        tip: "Attendance is a top employer concern for hourly roles — reassure them.",
      },
      {
        q: "How do you stay productive during slow periods?",
        why: "Good baristas use downtime well.",
        answer:
          "“I restock, clean, prep, tidy the station, and practise skills like latte art. Slow periods are when I set the bar up for the next rush.”",
        tip: "Never say you'd stand around — show initiative.",
      },
    ],
  },
  {
    id: "singapore-closing",
    title: "Singapore café scene & closing questions",
    questions: [
      {
        q: "What makes Singapore's café scene unique?",
        why: "It shows local awareness and genuine interest.",
        answer:
          "“Singapore blends traditional kopitiam culture with a fast-growing specialty coffee scene, and customers are diverse and well-travelled with high expectations. That mix makes it a great place to grow as a barista.”",
        tip: "Referencing both kopi culture and specialty coffee shows you understand the market.",
      },
      {
        q: "How would you serve customers from many different cultures?",
        why: "Singapore's customer base is highly multicultural.",
        answer:
          "“With patience, respect, and clear communication. I adapt to different preferences, stay friendly, and make every customer feel welcome regardless of background or language.”",
        tip: "Emphasise inclusivity and clear, patient communication.",
      },
      {
        q: "Are you comfortable in a fast-paced, high-volume city café?",
        why: "CBD and mall cafés run at high intensity.",
        answer:
          "“Yes — I enjoy a fast pace and I stay organised and consistent even when it's packed. Busy environments keep me focused and energised.”",
        tip: "Frame the pace as something you enjoy, not endure.",
      },
      {
        q: "How do you keep your energy up across long shifts?",
        why: "Stamina matters for full café days.",
        answer:
          "“I stay hydrated, pace myself, keep a positive attitude, and stay engaged with customers. Good energy is part of the service, so I treat it as part of the job.”",
        tip: "Show you understand energy affects customer experience.",
      },
      {
        q: "Why should we hire you over other candidates?",
        why: "Your chance to summarise your value.",
        answer:
          "“I combine solid coffee skills with genuine warmth, I'm reliable and flexible with hours, and I'm eager to keep learning. I'll be consistent behind the bar and good with your customers.”",
        tip: "Match your top strengths to what the café most needs.",
      },
      {
        q: "Do you have any questions for us?",
        why: "Strong candidates always ask thoughtful questions.",
        answer:
          "Always say yes. Ask about training, a typical shift, the team, growth opportunities, or their coffee. See the section below for good examples.",
        tip: "Never answer 'no' — it signals low interest.",
      },
      {
        q: "When can you start?",
        why: "It gauges your availability and keenness.",
        answer:
          "Be honest and prompt: “I can start immediately,” or give your real notice period. Sooner and flexible is usually better.",
        tip: "If you're available soon, say so clearly — it's often a deciding factor.",
      },
    ],
  },
];

const totalQuestions = categories.reduce(
  (sum, c) => sum + c.questions.length,
  0
);

const prepPoints = [
  "Research the café — try their coffee, check their menu, socials, and outlets.",
  "Dress clean, neat, and practical; smart-casual is safe for most café interviews.",
  "Arrive 10–15 minutes early and bring a copy of your résumé.",
  "Be ready for a hands-on trade test — many Singapore cafés ask you to pull a shot or steam milk.",
  "Prepare two or three questions to ask the interviewer.",
];

const questionsToAsk = [
  "What does a typical shift look like here?",
  "How is training and onboarding handled for new baristas?",
  "What coffee and beans do you use, and where are they roasted?",
  "What does success look like in this role in the first few months?",
  "Are there opportunities to grow into senior barista or shift-lead roles?",
];

const pageFaqs = [
  {
    q: "How many barista interview questions should I prepare for?",
    a: "Focus on being comfortable with the main themes — about you, coffee knowledge, customer service, situational scenarios, teamwork, and availability. This guide covers 50 across those categories so you can walk in ready for almost anything.",
  },
  {
    q: "What should I wear to a barista interview in Singapore?",
    a: "Neat, clean, smart-casual clothing works for most café interviews — closed shoes, tidy hair, and minimal strong fragrance. When in doubt, dress slightly smarter than the café's usual staff look.",
  },
  {
    q: "Do barista interviews in Singapore include a coffee-making test?",
    a: "Often, yes. Many cafés run a short hands-on trade test asking you to pull an espresso shot, steam milk, or make a drink. If you're new, be honest about your level and show willingness to learn.",
  },
  {
    q: "Do I need experience or a certificate to become a barista?",
    a: "Not always — many cafés hire and train beginners. But a barista course or certificate strengthens your application by showing you already understand espresso, milk texturing, and hygiene before your first shift.",
  },
  {
    q: "What questions should I ask the interviewer?",
    a: "Ask about training, a typical shift, the coffee they use, and opportunities to grow. Asking thoughtful questions signals genuine interest and almost always leaves a good impression.",
  },
];

export const metadata: Metadata = {
  title: "50 Barista Interview Questions and Answers (Singapore Guide)",
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

const categoryOffsets = categories.reduce<number[]>((acc, category, index) => {
  acc.push(index === 0 ? 0 : acc[index - 1] + categories[index - 1].questions.length);
  return acc;
}, []);

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <JsonLd
        data={[
          articleJsonLd(post),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            {
              name: "Barista Interview Questions",
              path: `/blog/${post.slug}`,
            },
          ]),
          faqJsonLd(pageFaqs),
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
              <span className="text-(--brand)">Interview Guide</span>
            </nav>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-(--border) bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700">
              <FiCoffee className="h-4 w-4 text-(--brand)" aria-hidden />
              Barista Job Prep · Singapore
            </div>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[44px] lg:leading-[1.1]">
              50 Barista Interview Questions and Answers (Singapore)
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Preparing for a barista job interview in Singapore? This guide gives
              you {totalQuestions} common questions across six categories — each
              with why it&rsquo;s asked, a sample answer, and a quick tip — plus
              how to prepare and smart questions to ask the interviewer.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-3xl px-4 pb-16 sm:pb-20">
          <figure className="overflow-hidden rounded-3xl border border-(--border) shadow-[0_18px_70px_-60px_rgba(2,6,23,0.55)]">
            <div className="relative h-[240px] sm:h-[360px]">
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

          {/* How to prepare */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              How to prepare for a barista interview in Singapore
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              A little preparation goes a long way. Before you rehearse answers,
              get the basics right:
            </p>
            <ul className="mt-5 space-y-3">
              {prepPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-base leading-relaxed text-slate-600"
                >
                  <FiCheck className="mt-1 h-4 w-4 shrink-0 text-(--brand)" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </section>

          {/* Table of contents */}
          <nav
            aria-label="Question categories"
            className="mt-10 rounded-3xl border border-(--border) bg-(--surface-2) p-6"
          >
            <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
              JUMP TO A SECTION
            </div>
            <ol className="mt-4 grid gap-2 sm:grid-cols-2">
              {categories.map((category, index) => (
                <li key={category.id}>
                  <a
                    href={`#${category.id}`}
                    className="group inline-flex items-start gap-2 text-sm font-semibold text-slate-700 hover:text-(--brand)"
                  >
                    <span className="text-(--brand)">{index + 1}.</span>
                    {category.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Question categories */}
          <div className="mt-12 space-y-14">
            {categories.map((category, categoryIndex) => (
              <section key={category.id} id={category.id} className="scroll-mt-24">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  {category.title}
                </h2>

                <div className="mt-6 space-y-6">
                  {category.questions.map((qa, questionIndex) => {
                    const questionNumber =
                      categoryOffsets[categoryIndex] + questionIndex + 1;
                    return (
                      <div
                        key={qa.q}
                        className="rounded-2xl border border-(--border) bg-white p-6 shadow-[0_18px_60px_-58px_rgba(2,6,23,0.5)]"
                      >
                        <h3 className="flex gap-3 text-lg font-bold text-slate-900">
                          <span className="shrink-0 text-(--brand)">
                            {questionNumber}.
                          </span>
                          <span>{qa.q}</span>
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-slate-500">
                          <span className="font-semibold text-slate-700">
                            Why they ask:
                          </span>{" "}
                          {qa.why}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">
                          <span className="font-semibold text-slate-700">
                            Sample answer:
                          </span>{" "}
                          {qa.answer}
                        </p>
                        <p className="mt-3 rounded-xl bg-(--surface-2) px-4 py-3 text-sm leading-relaxed text-slate-600">
                          <span className="font-semibold text-(--brand-2)">
                            Tip:
                          </span>{" "}
                          {qa.tip}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          {/* Questions to ask */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Smart questions to ask the interviewer
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              When they ask &ldquo;Do you have any questions for us?&rdquo;, always
              say yes. Thoughtful questions show genuine interest:
            </p>
            <ul className="mt-5 space-y-3">
              {questionsToAsk.map((q) => (
                <li
                  key={q}
                  className="flex items-start gap-3 text-base leading-relaxed text-slate-600"
                >
                  <FiCheck className="mt-1 h-4 w-4 shrink-0 text-(--brand)" aria-hidden />
                  {q}
                </li>
              ))}
            </ul>
          </section>

          {/* Page FAQ */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Barista interview FAQs
            </h2>
            <div className="mt-6 space-y-4">
              {pageFaqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-(--border) bg-white p-5 shadow-[0_18px_60px_-58px_rgba(2,6,23,0.5)]"
                >
                  <h3 className="text-base font-bold text-slate-900">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Closing CTA */}
          <div className="mt-12 rounded-3xl bg-[#193764] p-6 text-white sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight">
              Walk in with real skills, not just good answers
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
              The best way to ace the trade test and the interview is to actually
              know your way around the bar. Learn espresso, milk texturing, latte
              art, and café service hands-on at our Beach Road campus.
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
                href="/blog/how-to-become-a-barista-in-singapore"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15"
              >
                Read: How to become a barista
              </Link>
            </div>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
