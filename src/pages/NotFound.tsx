import Section from "../components/ui/Section";
import { asset } from "../lib/asset";
import Button from "../components/ui/Button";
import Seo from "../components/ui/Seo";

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" />
      <Section>
        <div className="flex flex-col items-center gap-6 py-10 text-center">
          <img src={asset("/brand/beeicon.svg")} alt="" className="h-24 w-24" />
          <h1 className="text-4xl text-forest">This page buzzed off</h1>
          <p className="max-w-md text-lg">We couldn't find that page. Try the shop or head back home.</p>
          <div className="flex gap-3">
            <Button to="/">Home</Button>
            <Button to="/products" variant="secondary">Our Products</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
