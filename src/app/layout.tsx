import "./globals.css";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";

const sans = Open_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: { default: "기현의 블로그", template: "기현의 블로그 | %s" },
  description: "프론트엔드 개발자 기현의 블로그입니다.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "mx-auto flex min-h-screen max-w-screen-2xl flex-col bg-background font-sans antialiased",
          sans.variable
        )}
      >
        <Header />
        <main className="grow p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
