import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FeaturedPapersRail } from "@/components/FeaturedPapersRail";
import { HeroScrollAnimation } from "@/components/HeroScrollAnimation";
import { HeroVisual } from "@/components/HeroVisual";
import { NewsTicker } from "@/components/NewsTicker";
import { ResearchHighlightCard } from "@/components/ResearchHighlightCard";
import { ResearchIntroPanel } from "@/components/ResearchIntroPanel";
import {
  featuredPaperSpotlights,
  members,
  newsItems,
  researchAreas,
  researchDirectionsIntro,
  researchDirectionsQuestion
} from "@/lib/content";

const heroTags = ["Mass spectrometry", "Metabolomics & Exposomics", "Bioinformatics", "Data mining", "Machine learning"];
const latestNewsItems = newsItems.slice(0, 4);
const labMemberNames = members
  .filter((member) => member.name !== "Open Positions")
  .map((member) => member.name);

export default function HomePage() {
  return (
    <>
      <section
        className="relative isolate min-h-[62svh] overflow-hidden border-b border-line lg:min-h-[64svh]"
        data-hero-scroll
      >
        <HeroScrollAnimation />
        <div
          className="absolute inset-0 origin-center will-change-transform"
          style={{
            filter: "blur(var(--hero-art-blur, 0px))",
            opacity: "var(--hero-art-opacity, 1)",
            transform:
              "translate3d(var(--hero-art-x, 0px), var(--hero-art-y, 0px), 0) scale(var(--hero-art-scale, 1)) rotate(var(--hero-art-rotate, 0deg))"
          }}
        >
          <HeroVisual />
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, color-mix(in srgb, var(--color-paper) 94%, transparent) 0%, color-mix(in srgb, var(--color-paper) 84%, transparent) 34%, color-mix(in srgb, var(--color-paper) 32%, transparent) 72%)"
          }}
        />
        <div
          className="pointer-events-none relative mx-auto flex min-h-[62svh] max-w-7xl items-center px-5 pb-14 pt-10 will-change-transform sm:px-8 lg:min-h-[64svh]"
          style={{
            opacity: "var(--hero-copy-opacity, 1)",
            transform: "translate3d(0, var(--hero-copy-y, 0px), 0)"
          }}
        >
          <div className="max-w-3xl">
            <h1 className="space-y-3 text-3xl font-semibold tracking-normal text-ink sm:text-4xl lg:text-5xl">
              <span className="block whitespace-nowrap">Metabolomics &</span>
              <span className="block whitespace-nowrap">Xenobiotic Metabolism</span>
              <span lang="zh-Hans" className="font-cjk block text-3xl font-normal text-muted sm:text-3xl lg:text-3xl">
                代谢组学与外源物代谢
              </span>
            </h1>
            <p className="mt-8 max-w-lg text-sm leading-6 text-muted">
              We aim to map the full landscape of small molecules in our bodies, and understand how food, microbes, and the environment shape them.
            </p>
            <p lang="zh-Hans" className="font-cjk mt-3 max-w-2xl text-sm leading-4 text-muted sm:whitespace-nowrap">
              我们致力于解析人体内小分子的完整图谱，并理解食物、微生物与环境如何塑造它们。
            </p>
            <p className="mt-20 flex max-w-xl flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold uppercase tracking-normal text-fudan">
              {heroTags.map((tag, index) => (
                <span key={tag} className="inline-flex items-center gap-4">
                  <span>{tag}</span>
                  {index < heroTags.length - 1 ? <span aria-hidden="true">|</span> : null}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      <NewsTicker items={latestNewsItems} />

      <FeaturedPapersRail labMemberNames={labMemberNames} spotlights={featuredPaperSpotlights} />

      <section className="mx-auto max-w-7xl px-5 py-3 sm:px-8">
        <article
          className="rounded-lg border border-line bg-white p-5 shadow-sm sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-6"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-fudan">Now Recruiting</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              We welcome motivated students and researchers from all backgrounds to join us in exploring the metabolome and xenobiotic metabolism. Applicants with diverse experiences, perspectives, and skill sets are encouraged to apply.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-3 inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition hover:border-fudan hover:text-fudan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fudan sm:mt-0"
          >
            View opportunities
            <ArrowRight aria-hidden="true" size={14} />
          </Link>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12 pt-3 sm:px-8 lg:pb-14">
        <div className="rounded-lg border border-line bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-7">
            <ResearchIntroPanel
              intro={researchDirectionsIntro}
              question={researchDirectionsQuestion}
              showExploreLink
            />
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {researchAreas.map((area, index) => (
              <ResearchHighlightCard key={area.slug} area={area} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
