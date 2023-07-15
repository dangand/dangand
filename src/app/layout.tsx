import "./globals.css";

import { Plus_Jakarta_Sans } from "next/font/google";

import QueryClientProviders from "@/utils/query-provider";
import TranslationProvider from "@/utils/translation-provider";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Dangand",
  description: "Digital Invitation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <QueryClientProviders>
          <TranslationProvider>{children}</TranslationProvider>
        </QueryClientProviders>
      </body>
    </html>
  );
}
