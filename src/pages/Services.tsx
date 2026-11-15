import Section from "../components/ui/Section";
import HighlightTitle from "../components/ui/HighlightTitle";
import Seo from "../components/ui/Seo";
import { site } from "../data/site";

export default function Services() {
  const a = site.address;
  return (
    <>
      <Seo title="Payment, Shipping & Returns" description="How to pay, how fast we ship, and our easy 7-day return policy." />
      <Section>
        <HighlightTitle as="h1">Payment, Shipping &amp; Returns</HighlightTitle>
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="rounded-xl bg-cream-soft p-6">
            <h2 className="text-2xl text-forest">Payment Methods</h2>
            <ul className="mt-4 list-disc space-y-1.5 pl-5 text-lg">
              <li>Visa</li>
              <li>MasterCard</li>
              <li>American Express</li>
              <li>Discover</li>
              <li>PayPal</li>
              <li>Personal check or money order</li>
            </ul>
            <p className="mt-4 text-lg">
              Make checks or money orders payable to <span className="font-semibold">{site.payableTo}</span>{" "}
              and mail to:
            </p>
            <address className="mt-2 text-lg not-italic leading-relaxed">
              {a.name}
              <br />
              {a.street}
              <br />
              {a.city}, {a.state} {a.zip}
            </address>
          </div>
          <div className="rounded-xl bg-cream-soft p-6">
            <h2 className="text-2xl text-forest">Shipping</h2>
            <p className="mt-4 text-lg leading-relaxed">
              Most orders ship within 1 to 2 business days of receiving your payment. We ship via USPS
              Priority Mail or Priority International Mail unless asked otherwise.
            </p>
          </div>
          <div className="rounded-xl bg-cream-soft p-6">
            <h2 className="text-2xl text-forest">Easy Returns</h2>
            <p className="mt-4 text-lg leading-relaxed">
              Returns are easy and convenient. You may return your purchase within 7 days for a refund
              or replacement. Just include your order's packing slip and send it back to us in new
              condition.
            </p>
            <p className="mt-3 text-lg leading-relaxed">
              You will receive your credit within 7 to 10 business days. Sorry, shipping charges are
              not refundable.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
