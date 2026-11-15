import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  as?: "h1" | "h2" | "h3";
  color?: "forest" | "plum" | "ink";
  className?: string;
}

const colors = { forest: "text-forest", plum: "text-plum", ink: "text-ink" };

export default function HighlightTitle({ as: Tag = "h2", color = "forest", className = "", children }: Props) {
  return (
    <Tag className={`highlight-title text-3xl font-semibold sm:text-4xl lg:text-5xl ${colors[color]} ${className}`}>
      {children}
    </Tag>
  );
}
