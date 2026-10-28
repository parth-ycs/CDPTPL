"use client"
import { ArrowRight } from "lucide-react";
import Container from "./container";
import sbus from "@/data/sbus";

const label =
  "grid gap-[9px] text-[11px] uppercase tracking-[0.08em] text-white/70";
const field =
  "w-full resize-y border-0 border-b border-white/35 bg-transparent py-[13px] text-white outline-0 placeholder:text-white/45 focus:border-brand-red";

export default function Enquiry() {
  return (
    <section id="enquiry" className="bg-brand-deep py-[120px] text-white">
      <Container className="grid gap-[45px] lg:grid-cols-[.8fr_1.2fr] lg:gap-[120px]">
        <div>

          <h2 id="rd-heading" className="mb-[30px] text-[clamp(46px,5.4vw,76px)] section-heading max-w-[620px] leading-[1] ">
            Have a process <br /><span className="text-brand-red-light"> challenge?</span>
          </h2>
          <p className="max-w-[380px] leading-[1.7] text-white/70">
            Connect with our team to discuss your application, project
            requirements and potential engineering solutions.
          </p>
          <div className="mt-[50px] mb-[18px] h-px w-full bg-white/20" />
          <p className="max-w-[300px] text-xs leading-[1.6] text-white/50">
            Your enquiry will be routed to the relevant strategic business unit.
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-[30px]">
            <label className={label}>
              Name
              <input required placeholder="Your name" className={field} />
            </label>
            <label className={label}>
              Company
              <input required placeholder="Company name" className={field} />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 sm:gap-[30px]">
            <label className={label}>
              Work email
              <input
                required
                type="email"
                placeholder="you@company.com"
                className={field}
              />
            </label>
            <label className={label}>
              Strategic business unit
              <select
                defaultValue=""
                className={`${field} text-white/75 [&>option]:text-ink`}
              >
                <option value="" disabled>
                  Select a business unit
                </option>
                {sbus.map((s) => (
                  <option key={s.name}>{s.name}</option>
                ))}
              </select>
            </label>
          </div>

          <label className={label}>
            Project requirements
            <textarea
              required
              rows={4}
              placeholder="Tell us a little about your process challenge…"
              className={field}
            />
          </label>

          <label className="flex items-center gap-[9px] text-[10px] normal-case tracking-normal text-white/70">
            <input type="checkbox" required className="size-[15px] accent-brand-red" />
            I consent to CHEMDIST GROUP using this information to respond to my enquiry.
          </label>

          <button
            type="submit"
            className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-3 bg-brand-red px-5 text-[11px] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-brand-red-dark sm:w-fit"
          >
            Send project enquiry <ArrowRight size={17} aria-hidden="true" />
          </button>

          <p className="-mt-[7px] text-[11px] text-white/45">
            Form integration pending CRM connection. No submission is sent in this prototype.
          </p>
        </form>
      </Container>
    </section>
  );
}
