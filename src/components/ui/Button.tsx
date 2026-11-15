import { Link } from "react-router-dom";
import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const variants = {
  primary: "bg-forest text-cream-soft hover:bg-leaf",
  secondary: "bg-honey text-ink hover:bg-gold",
  ghost: "border-2 border-forest text-forest hover:bg-forest hover:text-cream-soft",
};

export default function Button({ to, href, variant = "primary", className = "", type = "button", onClick, children }: Props) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-lg transition ${variants[variant]} ${className}`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} target="_blank" rel="noreferrer" className={cls}>{children}</a>;
  return <button type={type} onClick={onClick} className={cls}>{children}</button>;
}
