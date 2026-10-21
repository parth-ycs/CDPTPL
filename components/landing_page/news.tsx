"use client"
import Container from "./container";
import TextLink from "../ui/text-link";

const IMG_ONE =
  "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=80";
const IMG_TWO =
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80";

const meta = "text-[10px] font-bold tracking-[0.14em] text-brand-red";

export default function News() {
  return (
    <section className="bg-white py-[90px] lg:py-[130px]">
      <Container>
        <div className="mb-14 sm:flex sm:items-end sm:justify-between">
          <div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-blue">
              05 / updates
            </p>
            <h2 className="text-[clamp(42px,5vw,68px)] leading-[0.98] font-bold tracking-[-0.06em] text-ink">
              Latest from
              <br />
              <span className="text-brand-blue">Chemdist.</span>
            </h2>
          </div>
          <p className="mt-6 max-w-[270px] text-[13px] leading-relaxed text-muted sm:mt-0">
            Editorial updates will appear here once approved company news is
            available.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.8fr]">
          <article>
            <div
              className="mb-[22px] h-[250px] bg-cover bg-center"
              style={{ backgroundImage: `url('${IMG_ONE}')` }}
            />
            <div className={meta}>
              DEVELOPMENT PLACEHOLDER <span className="mx-[5px] text-muted">—</span> 2026
            </div>
            <h3 className="mt-[13px] text-[21px] leading-[1.22] font-bold">
              Building a clearer digital expression for process technology.
            </h3>
            <TextLink href="#enquiry" className="hover:text-brand-red">
              Read more
            </TextLink>
          </article>

          <article>
            <div
              className="mb-[22px] h-[180px] bg-cover bg-center"
              style={{ backgroundImage: `url('${IMG_TWO}')` }}
            />
            <p className={meta}>COMPANY UPDATE</p>
            <h3 className="mt-[13px] text-[21px] leading-[1.22] font-bold">
              Technology, capability and the next chapter.
            </h3>
            <TextLink href="#enquiry">Read more</TextLink>
          </article>

          <article className="min-h-[250px] bg-brand-blue p-7 text-white sm:col-span-2 lg:col-auto lg:min-h-[395px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">
              News &amp; insights
            </p>
            <h3 className="mt-[35px] mb-3.5 text-[28px] leading-[1.22] font-bold lg:mt-[85px]">
              Verified stories from across the Chemdist group.
            </h3>
            <p className="text-[13px] leading-[1.6] text-white/70">
              Connect with us to receive future updates.
            </p>
            <TextLink href="#enquiry" className="text-white hover:text-white/80">
              Get in touch
            </TextLink>
          </article>
        </div>
      </Container>
    </section>
  );
}
