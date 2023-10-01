import { Roboto } from "next/font/google";
import { Providers } from "@/contexts";
import type { Metadata } from "next";
import "./globals.css";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DT Money",
  description:
    "Simplified and efficient financial management project for users to control income, expenses and balance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
