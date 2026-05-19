import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quant Dossier",
  description: "Quant Dossier research platform"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <header>
            <h1>Quant Dossier</h1>
            <Navigation />
          </header>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
