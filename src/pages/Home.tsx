import { Link } from "react-router-dom";
import { asset } from "../lib/asset";
import Section from "../components/ui/Section";
import HighlightTitle from "../components/ui/HighlightTitle";
import Button from "../components/ui/Button";
import ProductCard from "../components/ui/ProductCard";
import Seo from "../components/ui/Seo";
import { featuredSlugs, products } from "../data/products";
import { packedWith } from "../data/learn";
import { site } from "../data/site";

const brazilCards = [
  {
    title: "High Flavonoid Concentration",
    text: "Packed with natural antioxidants, Bio Propolis supports overall health and wellness.",
    cls: "border-leaf shadow-card-green text-forest",
  },
  {
    title: "Purity You Can Trust",
    text: "Minimal wax and fewer impurities for a cleaner, more effective product.",
    cls: "border-gold shadow-card-yellow text-ink",
  },
  {
    title: "Globally Valued",
    text: "Recognized worldwide, especially in Asia, for its exceptional health benefits.",
    cls: "border-brazil shadow-card-blue text-plum",
  },
];

export default function Home() {
  const featured = featuredSlugs.map((s) => products.find((p) => p.slug === s)!).filter(Boolean);

  return (
    <>
      <Seo title="Brazilian Green Propolis" description={site.tagline} />

      {/* Hero */}
      <section className="relative flex min-h-[560px] h-[calc(100svh-88px)] max-h-[960px] w-full items-center justify-center overflow-hidden">
        <img
          src={asset("/brand/sunflower.png")}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-8 px-4 py-16 text-center sm:gap-12 sm:px-8">
          <h1 className="font-display text-5xl font-semibold text-gray-100 [text-shadow:_0_6px_0_rgb(0_0_0_/_40%)] sm:text-6xl lg:text-8xl">
            The Ever Natural
          </h1>
          <div className="w-full rounded-lg bg-gray-700/50 p-4 backdrop-blur-sm sm:p-6 lg:p-8">
            <p className="text-base leading-relaxed text-gray-100 sm:text-xl sm:leading-loose">
              We are a <span className="font-bold">health product company</span> located in Boonton,
              New Jersey, dedicated to high quality products for your health. Our products,{" "}
              <span className="font-bold">Brazilian Green Propolis</span>, come directly from Brazil
              and are FDA certified. Beyond our high quality, we strive for{" "}
              <span className="font-bold">affordable prices</span> and{" "}
              <span className="font-bold">100% customer satisfaction</span>. We are always glad to
              hear your suggestions and feedback!
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Button to="/products" variant="secondary">Shop Propolis</Button>
            <Button to="/learn" className="bg-white/90 text-forest hover:bg-white">What is Propolis?</Button>
          </div>
        </div>
        <a
          href="#welcome"
          aria-label="Scroll down"
          className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 sm:block"
        >
          <svg className="h-12 w-12 animate-bounce" fill="none" stroke="white" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </section>

      {/* Welcome */}
      <Section id="welcome">
        <img
          src={asset("/brand/bee1.png")}
          alt=""
          className="pointer-events-none absolute -left-10 top-0 z-0 hidden w-72 opacity-70 md:block"
          aria-hidden
        />
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
          <div className="flex flex-col items-center gap-6 md:w-2/5">
            <h2 className="text-4xl text-forest sm:text-5xl lg:text-6xl">Welcome to</h2>
            <img src={asset("/brand/logo.png")} alt="The Ever Natural" className="w-40 sm:w-52" />
          </div>
          <div className="hidden h-48 w-0.5 bg-gray-300 md:block" />
          <p className="rounded-lg bg-gray-200/40 p-6 text-center text-lg leading-loose md:w-3/5 md:text-xl">
            Propolis is a medicinal resin produced by plants, typically viscous and brown to
            brownish-green in color. Brazilian propolis is considered the best in the world due to the
            country's ideal climate and environment for bees to produce it year-round.
          </p>
        </div>
        <div className="mt-16 flex flex-col items-center gap-6 text-center">
          <HighlightTitle color="plum">The Health Benefits</HighlightTitle>
          <p className="max-w-4xl text-lg leading-loose md:text-xl">
            For thousands of years, propolis has been trusted across Asia and Europe as a powerful,
            natural defense against disease. Revered for its medicinal properties, it continues to be a
            valuable resource in modern health.
          </p>
          <Link to="/learn#health-benefits" className="font-display text-lg text-forest underline decoration-honey decoration-2 underline-offset-4 hover:text-leaf">
            Read about the research
          </Link>
        </div>
      </Section>

      {/* Packed with */}
      <Section tone="cream">
        <img
          src={asset("/brand/bee2.png")}
          alt=""
          className="pointer-events-none absolute -right-8 top-8 z-0 hidden w-72 opacity-70 md:block"
          aria-hidden
        />
        <HighlightTitle className="mb-12">Propolis is Packed With:</HighlightTitle>
        <ul className="grid gap-8 md:grid-cols-2">
          {packedWith.map((item) => (
            <li key={item.label} className="flex items-center gap-5">
              <div className="relative flex h-20 w-20 shrink-0 items-center justify-center">
                <img src={asset("/brand/circle.svg")} alt="" className="absolute inset-0 h-full w-full" />
                <img src={asset(item.icon)} alt="" className="relative h-10 w-10" />
              </div>
              <p className="text-lg sm:text-xl md:text-2xl">
                <span className="font-semibold text-forest">{item.label}:</span> {item.text}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Brazil */}
      <Section>
        <img
          src={asset("/brand/brasil.png")}
          alt=""
          className="pointer-events-none absolute -left-16 top-1/2 z-0 hidden w-96 -translate-y-1/2 opacity-15 lg:block"
          aria-hidden
        />
        <HighlightTitle color="ink">Brazil: The Heart of Propolis Research</HighlightTitle>
        <p className="mt-6 max-w-4xl text-lg leading-loose md:text-xl">
          Brazil is renowned as a global leader in propolis research, ensuring the highest standards of
          production. With a rich environment that supports year-round harvesting, Brazilian propolis is
          prized for its exceptional quality.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {brazilCards.map((c) => (
            <div key={c.title} className={`card-lift flex flex-col items-center gap-4 rounded-xl border-2 bg-white p-6 text-center ${c.cls}`}>
              <h3 className="text-2xl">{c.title}</h3>
              <div className="h-0.5 w-24 bg-gray-300" />
              <p className="text-lg text-ink">{c.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/learn#why-brazilian" variant="ghost">Why Brazilian propolis is the best</Button>
        </div>
      </Section>

      {/* Featured products */}
      <Section tone="cream">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <HighlightTitle>Our Products Are #1!</HighlightTitle>
          <Link to="/products" className="font-display text-lg text-forest underline decoration-honey decoration-2 underline-offset-4 hover:text-leaf">
            See all {products.length} products
          </Link>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Section>

      {/* Connect */}
      <Section tone="forest">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-4xl text-gold sm:text-5xl">Connect With Us!</h2>
          <p className="max-w-2xl text-lg leading-relaxed">
            Shop on eBay, follow us on Facebook, or reach out directly. We are glad to accept your
            suggestions and feedback. They are more than welcome, just email us.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href={site.links.ebay} variant="secondary">eBay Store</Button>
            <Button href={site.links.facebook} className="bg-white text-forest hover:bg-cream">Facebook</Button>
            <Button to="/contact" variant="ghost" className="border-cream-soft text-cream-soft hover:bg-cream-soft hover:text-forest">Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
