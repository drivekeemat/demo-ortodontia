import type { ReactNode } from "react";
import { Header, Footer } from "@/components/site-chrome";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-36 sm:px-8">
        <h1 className="text-4xl sm:text-5xl">{title}</h1>
        <div className="mt-10 space-y-5 leading-relaxed text-muted-foreground">{children}</div>
      </main>
      <Footer />
    </>
  );
}
