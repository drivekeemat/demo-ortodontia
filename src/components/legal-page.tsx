import type { ReactNode } from "react";
import { Header, Footer } from "@/components/site-chrome";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-36 sm:px-8">
        <p role="note" className="mb-8 rounded-xl border border-placeholder/60 bg-placeholder/10 px-4 py-3 text-sm text-foreground/80">
          Modelo provisório. Este texto precisa ser revisado e personalizado pela clínica, conforme a LGPD, antes da publicação comercial.
        </p>
        <h1 className="text-4xl sm:text-5xl">{title}</h1>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-muted-foreground">{children}</div>
      </main>
      <Footer />
    </>
  );
}
