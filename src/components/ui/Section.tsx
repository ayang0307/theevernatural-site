import type { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  id?: string;
  className?: string;
  tone?: "white" | "cream" | "forest";
}

const tones = {
  white: "bg-white",
  cream: "bg-cream-soft",
  forest: "bg-forest text-cream-soft",
};

export default function Section({ id, className = "", tone = "white", children }: SectionProps) {
  return (
    <section id={id} className={`relative overflow-hidden ${tones[tone]} ${className}`}>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">{children}</div>
    </section>
  );
}
