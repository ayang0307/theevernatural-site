import { Link } from "react-router-dom";
import Section from "../components/ui/Section";
import HighlightTitle from "../components/ui/HighlightTitle";
import Button from "../components/ui/Button";
import Seo from "../components/ui/Seo";
import { learnSections } from "../data/learn";
import { site } from "../data/site";

export default function Learn() {
  return (
    <>
      <Seo title="What is Propolis?" description="What bee propolis is, why Brazilian green propolis is the best, how quality is measured, and its health benefits." />
      <Section>
        <HighlightTitle as="h1">What is Propolis?</HighlightTitle>
        <p className="mt-6 max-w-3xl text-lg leading-loose md:text-xl">
          Everything we have learned about bee propolis, from the hive to the research labs of Brazil.
        </p>
        <nav className="mt-8 flex flex-wrap gap-2" aria-label="On this page">
          {learnSections.map((s) => (
            <Link
              key={s.id}
              to={`#${s.id}`}
              className="rounded-full border-2 border-forest/30 px-4 py-1.5 font-display text-base text-forest transition hover:border-forest"
            >
              {s.title}
            </Link>
          ))}
        </nav>
      </Section>

      {learnSections.map((s, i) => (
        <Section key={s.id} id={s.id} tone={i % 2 ? "white" : "cream"} className="scroll-mt-20">
          <div className="rounded-xl bg-gray-300/60 p-3 lg:p-4">
            <div className="flex flex-col items-center gap-6 rounded-lg bg-white p-6 shadow-xl sm:flex-row sm:items-start sm:gap-10 lg:p-10">
              <img src={s.icon} alt="" className="h-20 w-20 shrink-0 sm:mt-2" />
              <div className="hidden w-0.5 self-stretch bg-gray-300 sm:block" />
              <div className="flex-1">
                <h2 className="text-3xl text-forest sm:text-4xl">{s.title}</h2>
                {s.bullets && (
                  <ul className="mt-5 grid gap-3 sm:grid-cols-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="rounded-lg bg-honey/30 px-4 py-3 text-center font-display text-base uppercase tracking-wide text-forest">
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-5 space-y-4 text-lg leading-loose">
                  {s.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>
      ))}

      <Section tone="forest">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl text-gold">See it for yourself</h2>
            <p className="mt-4 text-lg leading-relaxed">
              A short introduction to Brazilian green propolis, from the original site.
            </p>
            <div className="mt-6">
              <Button to="/products" variant="secondary">Shop Propolis</Button>
            </div>
          </div>
          <div className="aspect-video overflow-hidden rounded-xl shadow-2xl">
            <iframe
              src={site.links.youtube}
              title="Brazilian green propolis introduction"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
