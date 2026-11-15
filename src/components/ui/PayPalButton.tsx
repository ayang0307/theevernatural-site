import { useState } from "react";
import { formatUSD, type Product } from "../../data/products";

/**
 * PayPal hosted "Add to Cart" button. The hidden field names and values are
 * the ones PayPal issued for each product, so the existing buttons keep working.
 */
interface Props {
  product: Product;
  compact?: boolean;
  defaultChoice?: "unit" | "case";
}

export default function PayPalButton({ product, compact = false, defaultChoice = "unit" }: Props) {
  const [choice, setChoice] = useState<"unit" | "case">(defaultChoice);
  const value = choice === "unit" ? product.paypal.unitValue : product.paypal.caseValue;

  return (
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_blank"
      className={`flex ${compact ? "flex-col gap-2" : "flex-col gap-3 sm:flex-row sm:items-end"}`}
    >
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value={product.paypal.hostedButtonId} />
      <input type="hidden" name="on0" value={product.paypal.optionName} />
      <input type="hidden" name="currency_code" value="USD" />
      <label className="flex flex-col gap-1 text-sm font-semibold text-forest">
        {!compact && <span>Option</span>}
        <select
          name="os0"
          value={value}
          onChange={(e) => setChoice(e.target.value === product.paypal.unitValue ? "unit" : "case")}
          className="rounded-md border border-forest/30 bg-white px-3 py-2 text-base text-ink focus:border-forest focus:outline-none"
        >
          <option value={product.paypal.unitValue}>
            Single bottle · {formatUSD(product.unitPrice)}
          </option>
          <option value={product.paypal.caseValue}>
            {product.caseSize} · {formatUSD(product.casePrice)}
          </option>
        </select>
      </label>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-honey px-5 py-2.5 font-display text-base text-ink transition hover:bg-gold"
        title="PayPal - The safer, easier way to pay online!"
      >
        Add to Cart
        <span className="text-xs font-body font-semibold opacity-70">via PayPal</span>
      </button>
    </form>
  );
}
