export const site = {
  name: "The Ever Natural",
  legalName: "TheEverNatural.com, Inc.",
  tagline: "Brazilian Green Propolis, imported directly from Brazil.",
  email: "p8yang@gmail.com",
  phones: ["973 422 7727", "973 449 8365"],
  address: {
    name: "Peter Yang",
    street: "5 Heather Way",
    city: "Boonton",
    state: "NJ",
    zip: "07005",
    country: "USA",
  },
  payableTo: "TheEverNatural",
  links: {
    ebay: "https://www.ebay.com/str/theevernatural",
    facebook: "https://www.facebook.com/theevernatural/",
    youtube: "https://www.youtube.com/embed/hYaWw8JxU6I",
  },
  foundedYear: 2010,
} as const;

export const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Our Products" },
  { to: "/learn", label: "Learn More" },
  { to: "/wholesale", label: "Wholesale" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function phoneHref(phone: string) {
  return `tel:+1${phone.replace(/\D/g, "")}`;
}
