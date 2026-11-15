import Section from "../components/ui/Section";
import HighlightTitle from "../components/ui/HighlightTitle";
import Button from "../components/ui/Button";
import Seo from "../components/ui/Seo";
import { phoneHref, site } from "../data/site";

export default function Contact() {
  const a = site.address;
  return (
    <>
      <Seo title="Contact" description="Contact The Ever Natural by email, phone or mail." />
      <Section>
        <HighlightTitle as="h1">Contact</HighlightTitle>
        <p className="mt-6 max-w-3xl text-lg leading-loose md:text-xl">
          Please contact us with any of your questions or concerns.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="card-lift rounded-xl border-2 border-leaf bg-white p-6 shadow-card-green">
            <h2 className="text-2xl text-forest">By Email</h2>
            <a href={`mailto:${site.email}`} className="mt-3 block break-all text-lg text-ink underline decoration-honey decoration-2 underline-offset-4 hover:text-forest">
              {site.email}
            </a>
          </div>
          <div className="card-lift rounded-xl border-2 border-gold bg-white p-6 shadow-card-yellow">
            <h2 className="text-2xl text-forest">By Phone</h2>
            {site.phones.map((p) => (
              <a key={p} href={phoneHref(p)} className="mt-3 block text-lg text-ink underline decoration-honey decoration-2 underline-offset-4 hover:text-forest">
                {p}
              </a>
            ))}
          </div>
          <div className="card-lift rounded-xl border-2 border-brazil bg-white p-6 shadow-card-blue">
            <h2 className="text-2xl text-forest">By Mail</h2>
            <address className="mt-3 text-lg not-italic leading-relaxed">
              {a.name}
              <br />
              {a.street}
              <br />
              {a.city}, {a.state} {a.zip} {a.country}
            </address>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={`mailto:${site.email}`} variant="secondary">Email us</Button>
          <Button href={site.links.facebook} variant="ghost">Message on Facebook</Button>
        </div>
      </Section>
    </>
  );
}
