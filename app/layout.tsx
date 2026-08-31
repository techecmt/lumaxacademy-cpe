import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import JsonLd from "./_components/JsonLd";
import { organizationJsonLd, SITE } from "./data/seo";

const poppins = Poppins({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Lumax Academy | Skills Training Academy in Singapore",
    template: "%s | Lumax Academy",
  },
  description:
    "Lumax Academy is a skills training academy at Beach Road, Singapore (near Nicoll Highway & Bugis MRT) offering hands-on certificate courses in nursing aide, caregiving, healthcare administration, and barista arts.",
  keywords: [
    "skills training academy Singapore",
    "healthcare courses Singapore",
    "caregiver course Singapore",
    "nursing aide course Singapore",
    "healthcare administration course Singapore",
    "barista course Singapore",
    "certificate courses Beach Road Singapore",
  ],
  applicationName: SITE.name,
  category: "education",
  openGraph: {
    type: "website",
    locale: "en_SG",
    siteName: SITE.name,
    url: "/",
    title: "Lumax Academy | Skills Training Academy in Singapore",
    description:
      "Hands-on certificate courses in nursing aide, caregiving, healthcare administration, and barista arts at Beach Road, Singapore.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumax Academy | Skills Training Academy in Singapore",
    description:
      "Hands-on certificate courses in nursing aide, caregiving, healthcare administration, and barista arts at Beach Road, Singapore.",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-SG"
      className={`${poppins.variable} ${geistMono.variable} h-full antialiased`}
    >
      {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
      <body className="min-h-full flex flex-col">
        {gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}
        <JsonLd data={organizationJsonLd()} />
        {children}
      </body>
    </html>
  );
}
