import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MSWComponent } from "./_component/MSWComponent";
import AuthSession from "./_component/AuthSession";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "z. 무슨 일이 일어나고 있나요? / Z",
  description: "Z.com inspired by z.com",
};
type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MSWComponent />
        <AuthSession>{children}</AuthSession>
      </body>
    </html>
  );
}
