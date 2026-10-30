
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Category = {
  slug: string;
  title: string;
  eyebrow: string;
  tagline: string;
  description: string;
  overview: string;
  image: string;
};

type Solution = {
  slug: string;
  groupSlug: string;
  hero: {
    name: string;
    tagline?: string;
    description?: string;
  };
};

type Props = {
  category: Category;
  solutions: Solution[];
};

export default function CategoryLanding({
  category,
  solutions = [],
}: Props) {
  return (
    <div className="bg-white text-[#172b45]">

      {/* OVERVIEW */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-24">

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#bd3038]">
              What we offer
            </p>

            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Engineering solutions built around industrial performance.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-gray-600 md:text-lg">
              {category.overview}
            </p>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Explore our specialized capabilities below to find the
              equipment and technologies relevant to your application.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICE NAVIGATION */}
      <section
        id="our-services"
        className="scroll-mt-28 bg-[#f5f7fa] py-24"
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">

          {/* SECTION HEADER */}
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#bd3038]">
                Our capabilities
              </p>

              <h2 className="text-3xl font-semibold text-[#172b45] md:text-4xl">
                Explore {category.title}
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-gray-500">
                Explore our specialized solutions, technologies and
                engineering capabilities.
              </p>
            </div>

            <span className="text-sm text-gray-400">
              {String(solutions.length).padStart(2, "0")} Solutions
            </span>
          </div>

          {/* SOLUTION LIST */}
          <div className="border-t border-gray-200">

            {solutions.length > 0 ? (
              solutions.map((solution, index) => (
                <Link
                  key={solution.slug}
                  href={`/solutions/${solution.slug}`}
                  className="group grid grid-cols-[42px_1fr_32px] items-center gap-4 border-b border-gray-200 py-7 transition-all duration-300 hover:bg-white hover:px-4 md:grid-cols-[70px_1fr_40px] md:gap-8 md:py-9"
                >

                  {/* NUMBER */}
                  <span className="text-sm tabular-nums text-gray-400 transition-colors duration-300 group-hover:text-[#bd3038]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* CONTENT */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#18395f] transition-colors duration-300 group-hover:text-[#bd3038] md:text-xl">
                      {solution.hero.name}
                    </h3>

                    {solution.hero.tagline && (
                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        {solution.hero.tagline}
                      </p>
                    )}

                    {solution.hero.description && (
                      <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-400">
                        {solution.hero.description}
                      </p>
                    )}
                  </div>

                  {/* ARROW */}
                  <div className="flex justify-end">
                    <ArrowUpRight
                      size={21}
                      strokeWidth={1.5}
                      className="text-gray-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#bd3038]"
                    />
                  </div>

                </Link>
              ))
            ) : (
              <div className="border-b border-gray-200 py-12">
                <p className="text-gray-500">
                  Our specialized solutions in this category will be
                  listed here.
                </p>
              </div>
            )}

          </div>
        </div>
      </section>
    </div>
  );
}
