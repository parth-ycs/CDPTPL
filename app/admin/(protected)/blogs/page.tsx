
import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";
import Container from "@/components/container";

export default function UnderDevelopmentPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-pale px-5">
      <Container>
        <div className="mx-auto max-w-2xl py-20 text-center">

          {/* ICON */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-brand-red/20 bg-brand-red/5">
            <Construction
              size={30}
              strokeWidth={1.5}
              className="text-brand-red"
            />
          </div>

          {/* CONTENT */}
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
            Coming Soon
          </p>

          <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-brand-deep sm:text-5xl">
            This Page Is
            <span className="block text-brand-blue">
              Under Development
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-lg font-sans text-base leading-7 text-muted sm:text-lg">
            We're working on something new. This page is currently
            being developed and will be available soon.
          </p>

          {/* DIVIDER */}
          <div className="mx-auto mt-8 h-[3px] w-12 bg-brand-red" />

          {/* BACK BUTTON */}
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 bg-brand-deep px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand-blue"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

        </div>
      </Container>
    </main>
  );
}
