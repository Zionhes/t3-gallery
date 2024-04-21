import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";

import { Inter } from "next/font/google";
import { TopBar } from "./_components/TopBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "T3 Gallery",
  description: "Batman!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${inter.variable} flex flex-col gap-4`}>
          <TopBar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
