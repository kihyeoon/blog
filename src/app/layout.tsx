import "./globals.css";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: { default: "기현의 블로그", template: "기현의 블로그 | %s" },
  description: "프론트엔드 개발자 기현의 블로그입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className="mx-auto flex min-h-screen max-w-screen-2xl flex-col">
        <Header />
        <main className="grow p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
