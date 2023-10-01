import { Roboto } from "next/font/google";
import { Providers } from "@/contexts";
import type { Metadata } from "next";
import "./globals.css";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DT Money",
  description:
    "Projeto de gestão financeira simplificado e eficiente para usuários controlarem receitas, despesas e saldo.",
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
