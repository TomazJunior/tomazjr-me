import type { Metadata } from "next";
import { Terminal, TabBar, StatusBar, Sidebar } from "@/components/layout";
import { TabsProvider } from "@/contexts/TabsContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tomaz Junior | Software Engineer",
  description:
    "Software Engineer at HubSpot. Building web applications with React, TypeScript, and Next.js.",
  keywords: [
    "Tomaz Junior",
    "Software Engineer",
    "HubSpot",
    "React",
    "TypeScript",
    "Next.js",
    "Web Developer",
  ],
  authors: [{ name: "Tomaz Junior" }],
  openGraph: {
    title: "Tomaz Junior | Software Engineer",
    description:
      "Software Engineer at HubSpot. Building web applications with React, TypeScript, and Next.js.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomaz Junior | Software Engineer",
    description:
      "Software Engineer at HubSpot. Building web applications with React, TypeScript, and Next.js.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
