import type { Metadata } from "next";
import { Terminal, TabBar, StatusBar, Sidebar } from "@/components/layout";
import { TabsProvider } from "@/contexts/TabsContext";
import "./globals.css";

const siteTitle = "Tomaz Junior | Senior Software Engineer";
const siteDescription =
  "Senior Software Engineer at HubSpot with 14+ years of experience building web applications and scalable solutions.";

export const metadata: Metadata = {
  metadataBase: new URL("https://tomazjr.me"),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Tomaz Junior",
    "Software Engineer",
    "HubSpot",
    "Full Stack Developer",
    "Web Developer",
    "Dublin",
  ],
  authors: [{ name: "Tomaz Junior" }],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    url: "https://tomazjr.me",
    siteName: "Tomaz Junior",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tomaz Junior - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tomaz Junior",
    jobTitle: "Senior Software Engineer II",
    worksFor: {
      "@type": "Organization",
      name: "HubSpot",
    },
    url: "https://tomazjr.me",
    sameAs: [
      "https://www.linkedin.com/in/tomaz-junior/",
      "https://github.com/TomazJunior",
    ],
    knowsAbout: [
      "React",
      "TypeScript",
      "Node.js",
      "Java",
      "AWS",
      "Software Engineering",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <TabsProvider>
          <Terminal>
            <div className="flex flex-1 overflow-hidden">
              <Sidebar />
              <div className="flex flex-col flex-1 overflow-hidden">
                <TabBar />
                <main className="flex-1 overflow-auto">{children}</main>
              </div>
            </div>
            <StatusBar />
          </Terminal>
        </TabsProvider>
      </body>
    </html>
  );
}
