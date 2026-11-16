import Section from "../components/ui/Section";
import { asset } from "../lib/asset";
import HighlightTitle from "../components/ui/HighlightTitle";
import Button from "../components/ui/Button";
import Seo from "../components/ui/Seo";

const story = [
  "My family moved to Brazil from China when I was in my early teens. Since then my brother, sisters and I grew up in that beautiful tropical land and among those wonderful people. For the next 15 years, I learned Portuguese, ate Brazilian food, made Brazilian friends and I became a Brazilian. But the most important thing is the Brazilian culture: the relationship between people and nature. Although Brazil is one of the biggest countries on Earth, it has few people on its land compared to other countries, so there is a lot of wild and unexplored land, and Mother Nature provides all people's needs. Besides food supplements, Brazilian Propolis is one of the most important natural medicines of daily life there. That is how my family also learned the importance of natural Brazilian Bee Propolis.",
  "After graduating from college in Civil Engineering, I moved to the United States of America. I have been a New Jersey resident for many years now and I am proud to be an American. During these years in the States, people always ask me what is the best thing I have from Brazil. My answer is always the same: among other things, no doubt Brazilian Green Propolis is the best in the world. So I started to import Brazilian Propolis for my friends, then my friends' friends, and so on.",
  "Now that I have a family of my own, with a lovely wife and 3 adorable kids to feed, I started my Propolis business to cover the costs. It is a good way to kill two birds with one stone! This way I am bringing nature's best from Brazil to help people here and around the world.",
];

export default function About() {
  return (
    <>
      <Seo title="About Us" description="The story behind The Ever Natural, a family business importing Brazilian green propolis to New Jersey." />
      <Section>
        <img
          src={asset("/brand/brasil.png")}
          alt=""
          className="pointer-events-none absolute -right-20 top-10 z-0 hidden w-[28rem] opacity-10 lg:block"
          aria-hidden
        />
        <HighlightTitle as="h1">About Us</HighlightTitle>
        <p className="mt-6 max-w-3xl font-display text-2xl text-forest/80">
          From Minas Gerais to Boonton, New Jersey: a family business built on the best of Brazil.
        </p>
        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <div className="space-y-6 text-lg leading-loose lg:col-span-2">
            {story.map((p, i) => (
              <p key={i} className={i === 0 ? "first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:leading-none first-letter:text-forest" : ""}>
                {p}
              </p>
            ))}
            <p className="font-display text-xl text-forest">Peter Yang, founder</p>
          </div>
          <aside className="space-y-6">
            <div className="rounded-xl border-2 border-leaf bg-white p-6 shadow-card-green">
              <h2 className="text-2xl text-forest">What we stand for</h2>
              <ul className="mt-4 space-y-3 text-lg">
                <li><span className="font-semibold text-forest">Quality:</span> green propolis imported directly from Brazil, FDA certified.</li>
                <li><span className="font-semibold text-forest">Affordable prices:</span> high-value products without the markup.</li>
                <li><span className="font-semibold text-forest">Satisfaction:</span> 100% customer satisfaction is our uppermost goal.</li>
              </ul>
            </div>
            <div className="rounded-xl bg-cream-soft p-6">
              <h2 className="text-2xl text-forest">Say hello</h2>
              <p className="mt-2 text-lg">Suggestions and feedback are more than welcome.</p>
              <div className="mt-4">
                <Button to="/contact" variant="ghost">Contact us</Button>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
