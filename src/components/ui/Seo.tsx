import { useEffect } from "react";

export default function Seo({ title, description }: { title: string; description?: string }) {
  useEffect(() => {
    document.title = `${title} · The Ever Natural`;
    if (description) {
      let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.name = "description";
        document.head.appendChild(tag);
      }
      tag.content = description;
    }
  }, [title, description]);
  return null;
}
