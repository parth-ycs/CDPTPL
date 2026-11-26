import Container from "./container";
import Button from "@/components/ui/button";
import Highlight from "./ui/highlight";
export default function Enquiry() {
  return (
    <section
      id="enquiry"
      aria-labelledby="enquiry-heading"
      className="bg-[#041326] text-white"
    >
      <Container>
        <div className="flex flex-col gap-12 pt-8 lg:flex-row lg:items-end lg:justify-between lg:gap-20">
          <div className="max-w-[640px]">
            <h2
              id="enquiry-heading"
              className="text-display font-heading mb-6"
            >
              Stuck on a process {" "}
              <Highlight className="text-brand-red-light">
                problem?
              </Highlight> 
            </h2>

            <p className="max-w-[460px] text-lead text-white/60">
              Describe what isn&rsquo;t working. An engineer will take it from
              there.
            </p>
          </div>

          <div className="shrink-0">
            <Button
              href="/contact"
              size="md"
              variant="light"
              className="font-heading text-brand-medium"
              circleClassName="h-8 w-8"
            >
              Talk to an engineer
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}