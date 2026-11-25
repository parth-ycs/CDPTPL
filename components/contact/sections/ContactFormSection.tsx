"use client";

import { useRef, useState, type FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Container from "@/components/container";
import { contactPageData } from "@/data/contact";

const { form } = contactPageData;
const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const fieldClass =
  "w-full rounded-lg border border-[#102c59]/20 bg-white px-3.5 py-2.5 text-sm text-[#102c59] placeholder:text-[#102c59]/40 outline-none transition focus:border-[#102c59] focus:ring-2 focus:ring-[#102c59]/15";

type Status = "idle" | "sending" | "success" | "error";

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-1 text-xs font-medium ${className}`}>
      <span>
        {label} <span className="text-brand-red">*</span>
      </span>
      {children}
    </label>
  );
}

export default function ContactFormSection() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [token, setToken] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;

    if (siteKey && !token) {
      setError("Please confirm you are not a robot.");
      return;
    }

    setError("");
    setStatus("sending");

    const data = Object.fromEntries(new FormData(formEl).entries());

    try {
      const res = await fetch(form.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, recaptchaToken: token }),
      });
      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      formEl.reset();
      recaptchaRef.current?.reset();
      setToken(null);
    } catch {
      setStatus("error");
      setError("We could not send your enquiry. Please try again.");
    }
  }

  return (
    <Container>
      <section className="py-10 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[3fr_7fr] lg:gap-12">
          {/* Left: 40% */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold tracking-[0.2em] text-brand-blue">
              {form.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
              {form.before}{" "}
              <span className="text-brand-blue">{form.highlight}</span>
              {form.after}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[#102c59]/75">
              {form.description}
            </p>

            <ul className="mt-6 space-y-2.5">
              {form.points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm font-medium">
                  <span className="h-2 w-2 rounded-full bg-red-600" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: 60% */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[#102c59]/10 bg-white p-5 shadow-[0_8px_30px_rgba(16,44,89,0.08)] md:p-6"
          >
            <div className="grid gap-x-4 gap-y-3.5 md:grid-cols-2">
              <Field label="First name">
                <input name="firstName" required placeholder="First name" className={fieldClass} />
              </Field>
              <Field label="Last name">
                <input name="lastName" required placeholder="Last name" className={fieldClass} />
              </Field>

              <Field label="Company name">
                <input name="company" required placeholder="Company name" className={fieldClass} />
              </Field>
              <Field label="Email">
                <input name="email" type="email" required placeholder="you@company.com" className={fieldClass} />
              </Field>

              
                <Field label="Mobile number">
                <div className="flex w-full gap-2">
                    <select
                    name="countryCode"
                    defaultValue="+91"
                    aria-label="Country code"
                    className={`${fieldClass} !w-[7rem] shrink-0 px-2`}
                    >
                    {form.countryCodes.map((c) => (
                        <option key={c.value} value={c.value}>
                        {c.label}
                        </option>
                    ))}
                    </select>

                    <input
                    name="mobile"
                    type="tel"
                    inputMode="numeric"
                    required
                    pattern="[0-9 ]{6,15}"
                    placeholder="Mobile number"
                    aria-label="Mobile number"
                    className={`${fieldClass} !w-0 min-w-0 flex-1`}
                    />
                </div>
                </Field>

              <Field label="Select who you are">
                <select name="role" required defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    Select who you are?
                  </option>
                  {form.roles.map((r) => (
                    <option key={r.value} value={r.value}>
                      {r.label}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Country">
                <select name="country" defaultValue="India" required className={fieldClass}>
                  {form.countries.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="City name">
                <input name="city" required placeholder="City name" className={fieldClass} />
              </Field>

              <Field label="Your query" className="md:col-span-2">
                <textarea
                  name="message"
                  required
                  rows={3}
                  placeholder="Kindly provide more details about your query so we can assist you better."
                  className={`${fieldClass} resize-none`}
                />
              </Field>
            </div>

            <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="max-w-full overflow-x-auto">
                {siteKey ? (
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={siteKey}
                    onChange={setToken}
                    onExpired={() => setToken(null)}
                  />
                ) : (
                  <p className="rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-xs text-amber-800">
                    reCAPTCHA not configured. Set NEXT_PUBLIC_RECAPTCHA_SITE_KEY and restart.
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center rounded-full bg-brand-blue px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#102c59] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#102c59] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : form.submitLabel}
              </button>
            </div>

            <div aria-live="polite" className="mt-3 text-sm empty:hidden">
              {error && <p className="text-red-600">{error}</p>}
              {status === "success" && <p className="text-green-700">{form.successMessage}</p>}
            </div>
          </form>
        </div>
      </section>
    </Container>
  );
}